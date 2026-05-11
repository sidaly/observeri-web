/**
 * WordPress REST API client for fetching blog posts
 */

import type { WordPressPost, BlogPostData } from "@/types/wordpress";

const WORDPRESS_API_URL = "https://grcsphere.net/wp-json/wp/v2/posts";
const POSTS_PER_PAGE = 100;

/**
 * Strip HTML tags from a string
 */
function stripHtml(html: string): string {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

/**
 * Clean HTML entities and tags from excerpt
 */
function cleanExcerpt(excerpt: string): string {
  return stripHtml(excerpt)
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
export async function fetchWordPressPosts(): Promise<BlogPostData[]> {
  try {
    const posts: BlogPostData[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const url = new URL(WORDPRESS_API_URL);
      url.searchParams.set("per_page", POSTS_PER_PAGE.toString());
      url.searchParams.set("page", page.toString());
      url.searchParams.set("status", "publish");
      url.searchParams.set("orderby", "date");
      url.searchParams.set("order", "desc");
      // Embed featured media to get image URLs
      url.searchParams.set("_embed", "true");

      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.statusText}`);
      }

      const wpPosts: WordPressPost[] = await response.json();

      if (wpPosts.length === 0) {
        hasMore = false;
        break;
      }

      // Transform WordPress posts to our BlogPostData format
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
    console.error("Error fetching WordPress posts:", error);
    throw error;
  }
}

/**
 * Fetch WordPress posts (server-side for build scripts)
 * Uses native Node.js fetch
 */
export async function fetchWordPressPostsNode(): Promise<BlogPostData[]> {
  try {
    const posts: BlogPostData[] = [];
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

      console.log(`Fetching WordPress posts (page ${page})...`);
      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.statusText}`);
      }

      const wpPosts: WordPressPost[] = await response.json();

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
          excerpt: cleanExcerptNode(post.excerpt.rendered),
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

    console.log(`Successfully fetched ${posts.length} posts from WordPress`);
    return posts;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw error;
  }
}

/**
 * Clean HTML entities and tags from excerpt (Node.js version)
 */
function cleanExcerptNode(excerpt: string): string {
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
