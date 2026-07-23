import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Newspaper, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

type FeaturedPost = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
};

type Post = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

// Featured article: set this to an object to spotlight a post at the top, or leave null.
// Example:
// const featured: FeaturedPost | null = {
//   category: "Industry",
//   title: "Your headline",
//   excerpt: "One or two sentences.",
//   readTime: "8 min read",
//   date: "Jun 2026",
// };
const featured: FeaturedPost | null = null;

// Blog posts: add entries here and the grid below renders them automatically.
const posts: Post[] = [];

export default function Resources() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F2871E]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
            Resources
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5">
            The <span className="brand-gradient-text">Rhymma</span> blog
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Field notes, guides, and product thinking for drivers, facilities, and carriers moving
            loads smarter.
          </p>
        </div>
      </section>

      {/* Featured (renders when `featured` is set) */}
      {featured && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <a
              href="#"
              className="group block max-w-6xl mx-auto rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[220px] brand-gradient flex items-center justify-center p-10">
                  <BookOpen className="w-16 h-16 text-white/70" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/90 bg-black/20 px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="brand-gradient-text">{featured.category}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 leading-tight group-hover:brand-gradient-text transition-all">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white">
                    Read article <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Post grid (renders when there are posts) */}
      {posts.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post, i) => (
                <motion.a
                  key={post.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest brand-gradient-text">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3 leading-snug group-hover:brand-gradient-text transition-all">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state (renders when there are no posts yet) */}
      {!featured && posts.length === 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-16">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7 brand-gradient-text" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-3">
                First posts on the way
              </h2>
              <p className="text-muted-foreground">
                We're writing our first articles now. Subscribe below and you'll be first to read them.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 sm:py-24 border-t border-white/5 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-6 h-6 brand-gradient-text" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white mb-4">
            The dispatch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            A short monthly newsletter on logistics intelligence, with guides, product updates, and the
            occasional road story. No spam, unsubscribe anytime.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 text-white font-mono text-sm uppercase tracking-widest">
              <Check className="w-5 h-5 text-[#F2871E]" /> You're subscribed
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-none h-12 bg-white/[0.02] border-white/15 flex-1"
              />
              <Button
                type="submit"
                className="brand-gradient text-white border-0 rounded-none h-12 px-6 font-mono text-xs uppercase tracking-widest hover:opacity-90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
