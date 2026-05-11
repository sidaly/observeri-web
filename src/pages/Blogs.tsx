import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { BlogPostCard } from "@/components/BlogPostCard";
import { ArrowRight, Newspaper } from "lucide-react";
import blogPosts from "@/data/posts.json";
import type { BlogPostData } from "@/types/wordpress";

const posts: BlogPostData[] = blogPosts;

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp><p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Blogs & resources</p></FadeUp>
            <FadeUp delay={0.06}><h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">Observeri blogs</h1></FadeUp>
            <FadeUp delay={0.12}><p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Practical writing on AI-powered GRC, compliance, and risk programs.</p></FadeUp>
            <FadeUp delay={0.18}><p className="mt-6 text-sm text-muted-foreground">Looking for press coverage? <Link to="/newsroom" className="font-medium text-primary underline-offset-4 hover:underline">Visit the newsroom</Link>.</p></FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeUp><p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">From our blog</p></FadeUp>
            <FadeUp delay={0.06}><h2 className="text-3xl font-display font-bold md:text-4xl">Latest articles from GRC sphere</h2></FadeUp>
            <FadeUp delay={0.12}><p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">In-depth articles on AI-powered GRC, compliance strategies, and risk management best practices.</p></FadeUp>
          </div>

          {posts.length > 0 ? (
            <StaggerContainer className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
              {posts.map((post, index) => (
                <StaggerItem key={post.id}><BlogPostCard post={post} delay={index * 0.05} /></StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeUp>
              <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-dashed border-border/50 bg-card/30 py-16 text-center">
                <Newspaper className="mb-4 h-12 w-12 text-muted-foreground/50" />
                <h3 className="text-lg font-semibold text-muted-foreground">No blog posts yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">Run <code className="rounded bg-muted px-1.5 py-0.5">npm run fetch-blogs</code> to fetch posts from GRC sphere.</p>
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.2}>
            <div className="mt-12 flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="https://grcsphere.net" target="_blank" rel="noopener noreferrer">Visit GRC sphere<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
