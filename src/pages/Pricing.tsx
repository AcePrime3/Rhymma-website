import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { segmentList, type SegmentId } from "@/lib/segments";

type Tier = {
  name: string;
  price: number | "custom";
  blurb: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

const plans: Record<SegmentId, Tier[]> = {
  driver: [
    {
      name: "Starter",
      price: 0,
      blurb: "Everything a solo driver needs to plan smarter trips.",
      features: ["Fuel & rest stop planning", "Basic route guidance", "Arrival window estimates", "1 active trip"],
      cta: "Get the app",
    },
    {
      name: "Pro",
      price: 19,
      blurb: "For owner-operators who live on the road.",
      features: [
        "Everything in Starter",
        "Unlimited active trips",
        "Congestion & bottleneck avoidance",
        "Best pickup opportunity alerts",
        "Priority support",
      ],
      highlighted: true,
      cta: "Start free trial",
    },
    {
      name: "Team",
      price: "custom",
      blurb: "For small driver teams running together.",
      features: ["Everything in Pro", "Shared trip visibility", "Team performance insights", "Volume pricing"],
      cta: "Contact us",
    },
  ],
  facility: [
    {
      name: "Starter",
      price: 299,
      blurb: "For a single facility getting ahead of arrivals.",
      features: ["Predictive arrival windows", "1 facility / dock group", "Up to 25 users", "Email support"],
      cta: "Start free trial",
    },
    {
      name: "Growth",
      price: 899,
      blurb: "For busy distribution centers and plants.",
      features: [
        "Everything in Starter",
        "Up to 5 facilities",
        "Dock & labor scheduling",
        "Bottleneck analytics",
        "Priority support",
      ],
      highlighted: true,
      cta: "Start free trial",
    },
    {
      name: "Enterprise",
      price: "custom",
      blurb: "For multi-site operations and networks.",
      features: ["Unlimited facilities", "SSO & advanced roles", "Custom integrations", "Dedicated success manager"],
      cta: "Talk to sales",
    },
  ],
  carrier: [
    {
      name: "Starter",
      price: 499,
      blurb: "For small fleets ready to synchronize.",
      features: ["Live load visibility", "Up to 15 trucks", "Fuel waste insights", "Email support"],
      cta: "Start free trial",
    },
    {
      name: "Scale",
      price: 1499,
      blurb: "For growing fleets, 3PLs, and brokers.",
      features: [
        "Everything in Starter",
        "Up to 100 trucks",
        "Supply chain synchronization",
        "Pricing & margin analytics",
        "Priority support",
      ],
      highlighted: true,
      cta: "Start free trial",
    },
    {
      name: "Enterprise",
      price: "custom",
      blurb: "For large fleets and enterprise networks.",
      features: ["Unlimited trucks", "SSO & advanced roles", "Custom integrations & API", "Dedicated success manager"],
      cta: "Talk to sales",
    },
  ],
};

const faqs = [
  {
    q: "Is there really a free plan for drivers?",
    a: "Yes. The Rhymma driver app Starter plan is free forever for individual drivers, with no credit card required.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade, downgrade, or cancel anytime. Changes are prorated automatically on your next invoice.",
  },
  {
    q: "What does annual billing save me?",
    a: "Annual billing takes 20% off every paid plan, roughly two and a half months free compared to paying monthly.",
  },
  {
    q: "Do facility and carrier plans include onboarding?",
    a: "Growth, Scale, and Enterprise plans include guided onboarding. Enterprise customers get a dedicated success manager.",
  },
];

function formatPrice(price: number | "custom", annual: boolean): string {
  if (price === "custom") return "Custom";
  if (price === 0) return "$0";
  const monthly = annual ? Math.round(price * 0.8) : price;
  return `$${monthly.toLocaleString()}`;
}

export default function Pricing() {
  const [audience, setAudience] = useState<SegmentId>("driver");
  const [annual, setAnnual] = useState(true);
  const tiers = plans[audience];

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F2871E]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
            Pricing
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5">
            Pricing that scales <br className="hidden sm:block" />
            <span className="brand-gradient-text">with every mile</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent plans for drivers, facilities, and carriers. Start free or trial any
            paid plan for 14 days.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Audience selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full border border-white/10 bg-white/5">
              {segmentList.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setAudience(s.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all ${
                    audience === s.id ? "brand-gradient text-white" : "text-muted-foreground hover:text-white"
                  }`}
                  data-testid={`audience-${s.id}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-xs font-mono uppercase tracking-widest ${!annual ? "text-white" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnual((v) => !v)}
              className="relative w-14 h-7 rounded-full border border-white/15 bg-white/5 transition-colors"
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full brand-gradient transition-transform ${
                  annual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-mono uppercase tracking-widest ${annual ? "text-white" : "text-muted-foreground"}`}>
              Annual
              <span className="ml-2 text-[10px] brand-gradient-text">Save 20%</span>
            </span>
          </div>

          {/* Tiers */}
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {tiers.map((tier, i) => (
              <motion.div
                key={`${audience}-${tier.name}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "brand-gradient-border bg-white/[0.04]"
                    : "border border-white/5 bg-white/[0.02]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 brand-gradient text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <h3 className="text-lg font-display font-bold uppercase text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.blurb}</p>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-display font-bold text-white">
                    {formatPrice(tier.price, annual)}
                  </span>
                  {tier.price !== "custom" && tier.price !== 0 && (
                    <span className="text-sm text-muted-foreground mb-2">/mo{annual ? ", billed yearly" : ""}</span>
                  )}
                </div>

                <Button
                  asChild
                  className={`w-full rounded-none h-12 font-mono text-xs uppercase tracking-widest mb-8 ${
                    tier.highlighted
                      ? "brand-gradient text-white border-0 hover:opacity-90"
                      : "bg-transparent border border-white/20 text-white hover:bg-white/5"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <Link href={tier.price === "custom" ? "/contact" : `/signin/${audience}`}>
                    {tier.cta}
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#F2871E]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 border-t border-white/5 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white text-center mb-12">
            Frequently asked
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-white text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#A83E0A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight mb-8">
            <span className="brand-gradient-text">Ready to move smarter?</span>
          </h2>
          <Button
            asChild
            size="lg"
            className="brand-gradient text-white border-0 rounded-none h-14 px-10 font-mono text-sm uppercase tracking-widest hover:opacity-90"
          >
            <Link href="/get-started">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
