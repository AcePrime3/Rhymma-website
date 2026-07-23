import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, LifeBuoy, Bug, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const reasons = [
  "Report an issue",
  "Bug or defect",
  "Billing",
  "Praise",
  "Sales question",
  "Something else",
];

const channels = [
  {
    icon: LifeBuoy,
    label: "Support",
    value: "support@rhymma.com",
    note: "Issues, problems & defects",
  },
  {
    icon: MessageSquare,
    label: "Sales",
    value: "sales@rhymma.com",
    note: "Demos & fleet questions",
  },
  {
    icon: Mail,
    label: "General",
    value: "hello@rhymma.com",
    note: "Press, partnerships & praise",
  },
];

export default function Contact() {
  const [reason, setReason] = useState(reasons[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#DB5A0E]/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
            Contact
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5">
            Let's <span className="brand-gradient-text">talk</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hit a problem, found a defect, have a question, or just want to say thanks? Send us a note
            and a real person will get back to you.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#F2871E]/10 border border-[#F2871E]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#F2871E]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-3">
                    Message sent
                  </h2>
                  <p className="text-muted-foreground max-w-md mb-8">
                    Thanks for reaching out about "{reason.toLowerCase()}". Our team typically replies
                    within one business day.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/5 rounded-none h-11 px-6 font-mono text-xs uppercase tracking-widest"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block">
                      What's this about?
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setReason(r)}
                          className={`px-3 py-2 rounded-md text-xs font-mono uppercase tracking-widest border transition-all ${
                            reason === r
                              ? "brand-gradient text-white border-transparent"
                              : "border-white/15 text-muted-foreground hover:text-white hover:border-white/30"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Name
                      </Label>
                      <Input id="name" required placeholder="Jordan Rivera" className="rounded-none h-11 bg-white/[0.02] border-white/15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Email
                      </Label>
                      <Input id="email" type="email" required placeholder="you@example.com" className="rounded-none h-11 bg-white/[0.02] border-white/15" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Company <span className="normal-case tracking-normal">(optional)</span>
                    </Label>
                    <Input id="company" placeholder="Acme Logistics" className="rounded-none h-11 bg-white/[0.02] border-white/15" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us what's going on. The more detail, the faster we can help."
                      className="rounded-none bg-white/[0.02] border-white/15 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full brand-gradient text-white border-0 rounded-none h-12 font-mono text-xs uppercase tracking-widest hover:opacity-90"
                    data-testid="contact-submit"
                  >
                    Send message <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Channels */}
            <div className="space-y-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 brand-gradient-text" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                        {c.label}
                      </div>
                      <a href={`mailto:${c.value}`} className="text-white hover:brand-gradient-text transition-colors font-medium">
                        {c.value}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{c.note}</p>
                    </div>
                  </div>
                );
              })}

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 brand-gradient-text" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Response time
                  </div>
                  <p className="text-white font-medium">Within 1 business day</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon–Fri, from a real human.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Bug className="w-5 h-5 brand-gradient-text" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Found a defect?
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Include steps to reproduce, your device, and a screenshot if you can. It helps us
                    ship a fix faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
