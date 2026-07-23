import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { segmentList } from "@/lib/segments";

export default function GetStarted() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#A83E0A]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5"
          >
            Get Started
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5"
          >
            Choose your <span className="brand-gradient-text">path</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Rhymma adapts to how you move loads. Pick the experience built for you and we'll take
            it from there.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {segmentList.map((segment, i) => {
              const Icon = segment.icon;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors overflow-hidden"
                >
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[90px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                    style={{ background: segment.accent }}
                  />

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${segment.accent}1a`, border: `1px solid ${segment.accent}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: segment.accent }} />
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {segment.product}
                  </div>
                  <h2 className="text-2xl font-display font-bold uppercase text-white mb-1">
                    {segment.label}
                  </h2>
                  <p className="text-xs text-muted-foreground mb-5">{segment.audience}</p>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">{segment.description}</p>

                  <ul className="space-y-3 mb-8">
                    {segment.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: segment.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full brand-gradient text-white border-0 rounded-none h-12 font-mono text-xs uppercase tracking-widest hover:opacity-90"
                      data-testid={`continue-${segment.id}`}
                    >
                      <Link href="/contact">
                        Talk to Us <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12 text-xs text-muted-foreground font-mono">
            <ShieldCheck className="w-4 h-4" />
            Enterprise-grade security.
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
