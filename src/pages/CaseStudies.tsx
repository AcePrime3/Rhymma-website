import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

type FeaturedStudy = {
  segment: string;
  company: string;
  headline: string;
  quote: string;
  author: string;
  accent: string;
  stats: { value: string; label: string }[];
};

type CaseStudy = {
  segment: string;
  company: string;
  result: string;
  description: string;
  accent: string;
};

// Featured case study: set to an object to spotlight one at the top, or leave null.
// Example:
// const featured: FeaturedStudy | null = {
//   segment: "Carrier",
//   company: "Company name",
//   headline: "Headline result",
//   quote: "A customer quote.",
//   author: "Title, Company",
//   accent: "#DB5A0E",
//   stats: [{ value: "22%", label: "Metric" }],
// };
const featured: FeaturedStudy | null = null;

// Case studies: add entries here and the grid below renders them automatically.
const studies: CaseStudy[] = [];

export default function CaseStudies() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#A83E0A]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
            Case Studies
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5">
            Proof in the <span className="brand-gradient-text">miles</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            How drivers, facilities, and carriers put Rhymma to work. Stories coming soon.
          </p>
        </div>
      </section>

      {/* Featured case study (renders when `featured` is set) */}
      {featured && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden relative">
              <div
                className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: featured.accent }}
              />
              <div className="p-8 sm:p-12 relative z-10">
                <div className="flex items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span style={{ color: featured.accent }}>{featured.segment}</span>
                  <span>·</span>
                  <span>{featured.company}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase text-white mb-8 leading-tight max-w-3xl">
                  {featured.headline}
                </h2>

                <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-2xl">
                  {featured.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl sm:text-4xl font-display font-bold brand-gradient-text mb-1">
                        {s.value}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 pl-6 max-w-2xl" style={{ borderColor: featured.accent }}>
                  <Quote className="w-6 h-6 mb-3" style={{ color: featured.accent }} />
                  <p className="text-lg text-white/90 italic mb-3">{featured.quote}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {featured.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid (renders when there are case studies) */}
      {studies.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {studies.map((study, i) => (
                <motion.a
                  key={study.company}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span style={{ color: study.accent }}>{study.segment}</span>
                    <span>·</span>
                    <span>{study.company}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                    {study.result}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{study.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                    Read the story <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state (renders when there are no case studies yet) */}
      {!featured && studies.length === 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-16">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <Quote className="w-7 h-7 brand-gradient-text" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-3">
                Case studies coming soon
              </h2>
              <p className="text-muted-foreground">
                We're partnering with early customers to document real results. Check back shortly.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 sm:py-28 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F2871E]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight mb-8">
            <span className="brand-gradient-text">Write your own story</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="brand-gradient text-white border-0 rounded-none h-14 px-10 font-mono text-sm uppercase tracking-widest hover:opacity-90"
            >
              <Link href="/get-started">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/5 rounded-none h-14 px-10 font-mono text-sm uppercase tracking-widest"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
