import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blogPosts from "@/data/posts.json";
import type { BlogPostData } from "@/types/wordpress";

const posts = blogPosts as BlogPostData[];

const rewriteArticleLinks = (html: string) =>
  html
    .replace(/href=(['"])https?:\/\/(?:www\.)?grcsphere\.net\/(?!wp-content\/)([^'"?#]*)([^'"]*)\1/gi, (_match, quote, path, suffix) => {
      const normalizedPath = path.replace(/^\/+|\/+$/g, "");
      return `href=${quote}${normalizedPath ? `/blog/${normalizedPath}` : "/blog"}${suffix}${quote}`;
    })
    .replace(/<a\s/gi, '<a rel="noopener noreferrer" ');

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) return <Navigate to="/not-found" replace />;

  const published = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <main>
        <header className="relative overflow-hidden pb-12 pt-28">
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="container relative z-10 mx-auto max-w-5xl px-6">
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Observeri insights</p>
            <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl" dangerouslySetInnerHTML={{ __html: post.title }} />
            <p className="mt-6 text-sm text-muted-foreground">Published {published}</p>
          </div>
        </header>

        {post.featured_image && (
          <div className="container mx-auto max-w-5xl px-6">
            <img
              src={post.featured_image}
              alt={post.alt_text || post.title.replace(/<[^>]*>/g, "")}
              width={post.image_width}
              height={post.image_height}
              fetchPriority="high"
              className="aspect-[16/9] w-full rounded-2xl border border-border/50 object-cover shadow-2xl"
            />
          </div>
        )}

        <article
          className="wordpress-article container mx-auto max-w-4xl px-6 py-14 text-base leading-8 text-muted-foreground md:text-lg"
          dangerouslySetInnerHTML={{ __html: rewriteArticleLinks(post.content) }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
