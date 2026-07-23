import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Compass, HeartHandshake, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const values = [
  {
    icon: HeartHandshake,
    title: "Drivers first",
    desc: "Every feature has to earn its place by making a driver's day better, not harder.",
  },
  {
    icon: Eye,
    title: "Radical visibility",
    desc: "Persistent, honest data across every load. No black boxes, no guesswork.",
  },
  {
    icon: Compass,
    title: "Built for the road",
    desc: "We design for the realities of trucking: weather, windows, hours, and human beings.",
  },
  {
    icon: ShieldCheck,
    title: "Earned trust",
    desc: "Security, reliability, and transparency are the foundation, not an afterthought.",
  },
];

const stats = [
  { value: "Real-Time", label: "Intelligence" },
  { value: "Driver-First", label: "Design" },
  { value: "Enterprise", label: "Ready" },
];

export default function Company() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#DB5A0E]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
            Company
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-6">
            About <span className="brand-gradient-text">Rhymma</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a logistics intelligence company on a mission to respect the hard work of drivers
            while giving the supply chain the clarity it has always lacked.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 border-y border-white/5 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-widest brand-gradient-text mb-6 text-center">
            Our mission
          </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white text-center leading-snug">
            To connect the driver, the destination, and the facility into one intelligent system,
            so loads move <span className="brand-gradient-text">faster, safer, and smarter</span> for
            everyone.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2871E]/5 via-transparent to-[#A83E0A]/5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
              Our philosophy
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-tight mb-6">
              <span className="text-white">Elevate drivers.</span>
              <br />
              <span className="brand-gradient-text">Not replace them.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The industry spends a lot of energy trying to automate people out of the picture. We
              think that's backwards. Drivers are the experts on the road. Rhymma exists to give them
              better information and smarter tools, not to second-guess them.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg sm:text-xl font-display font-bold text-white mb-2 leading-tight break-words">{s.value}</div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white mb-4">
              What we value
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles behind every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 brand-gradient-text" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-28 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#A83E0A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight mb-6">
            <span className="brand-gradient-text">Want to talk?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Questions about Rhymma, partnership ideas, press, or just want to share feedback? We'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="brand-gradient text-white border-0 rounded-none h-14 px-10 font-mono text-sm uppercase tracking-widest hover:opacity-90"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/5 rounded-none h-14 px-10 font-mono text-sm uppercase tracking-widest"
            >
              <Link href="/get-started">Explore the platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
