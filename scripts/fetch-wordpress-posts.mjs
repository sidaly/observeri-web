/**
 * Fetch WordPress blog posts and save to JSON
 * Usage: node scripts/fetch-wordpress-posts.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORDPRESS_API_URL = "https://grcsphere.net/wp-json/wp/v2/posts";
const POSTS_PER_PAGE = 100;
const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "posts.json");

/**
 * Clean HTML entities and tags from excerpt
 */
function cleanExcerpt(excerpt) {
  return excerpt
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\[&hellip;\]/g, "...")
    .trim();
}

/**
 * Fetch all published posts from WordPress with pagination support
 */
async function fetchWordPressPosts() {
  try {
    const posts = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const url = new URL(WORDPRESS_API_URL);
      url.searchParams.set("per_page", POSTS_PER_PAGE.toString());
      url.searchParams.set("page", page.toString());
      url.searchParams.set("status", "publish");
      url.searchParams.set("orderby", "date");
      url.searchParams.set("order", "desc");
      url.searchParams.set("_embed", "true");

      console.log(`📡 Fetching WordPress posts (page ${page})...`);
      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.statusText}`);
      }

      const wpPosts = await response.json();

      if (wpPosts.length === 0) {
        hasMore = false;
        break;
      }

      // Transform WordPress posts
      const transformedPosts = wpPosts.map((post) => {
        const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: cleanExcerpt(post.excerpt.rendered),
          link: post.link,
          date: post.date,
          featured_image: featuredMedia?.source_url,
          alt_text: featuredMedia?.alt_text || "",
        };
      });

      posts.push(...transformedPosts);

      // Check if there are more posts
      const totalPages = response.headers.get("X-WP-TotalPages");
      if (!totalPages || page >= parseInt(totalPages, 10)) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return posts;
  } catch (error) {
    console.error("❌ Error fetching WordPress posts:", error);
    throw error;
  }
}

/**
 * Save posts to JSON file
 */
async function savePosts(posts) {
  try {
    // Ensure the data directory exists
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`✅ Successfully saved ${posts.length} posts to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("❌ Error saving posts to file:", error);
    throw error;
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log("🚀 Starting WordPress blog post fetch...\n");
    const posts = await fetchWordPressPosts();
    await savePosts(posts);
    console.log("\n✨ Done!");
  } catch (error) {
    process.exit(1);
  }
}

main();
