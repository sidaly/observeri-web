import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { BlogPostData } from "@/types/wordpress";

interface BlogPostCardProps {
  post: BlogPostData;
  delay?: number;
}

export function BlogPostCard({ post, delay = 0 }: BlogPostCardProps) {
  const publishDate = new Date(post.date);
  const formattedDate = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Featured Image */}
      {post.featured_image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <img
            src={post.featured_image}
            alt={post.alt_text || post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-5">
        {/* Date */}
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {formattedDate}
        </p>

        {/* Title */}
        <h3 className="mb-3 line-clamp-3 text-lg font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 line-clamp-3 text-sm text-muted-foreground">
          {post.excerpt}
        </p>

        {/* CTA Button */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}
