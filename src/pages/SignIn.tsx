import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Mail } from "lucide-react";
import { SiGoogle, SiApple } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import rhymmaLogo from "@assets/Rhymma_logo_orange_Gradiant_1776087102147.png";
import { isSegmentId, segments, segmentList, type SegmentId } from "@/lib/segments";

interface SignInProps {
  params?: { segment?: string };
}

export default function SignIn({ params }: SignInProps) {
  const segmentId: SegmentId | null = isSegmentId(params?.segment) ? params!.segment : null;
  const segment = segmentId ? segments[segmentId] : null;
  const accent = segment?.accent ?? "#DB5A0E";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans grid lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-5 sm:px-10 lg:px-16 py-8">
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center gap-3">
            <img src={rhymmaLogo} alt="Rhymma Logo" className="h-7 w-auto" data-testid="signin-logo" />
          </Link>
          <Link
            href="/get-started"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All solutions
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: `${accent}1a`, border: `1px solid ${accent}40` }}
              >
                <CheckCircle2 className="w-8 h-8" style={{ color: accent }} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-3">
                You're on the list
              </h1>
              <p className="text-muted-foreground mb-2">
                {mode === "signup" ? "Account created" : "Welcome back"}
                {segment ? `. Your ${segment.product.toLowerCase()} is being prepared.` : "."}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                The full {segment ? segment.label.toLowerCase() : "product"} experience is rolling out
                shortly. We'll email you the moment it's ready to explore.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  className="brand-gradient text-white border-0 rounded-none h-12 font-mono text-xs uppercase tracking-widest hover:opacity-90"
                >
                  <Link href="/">Back to home</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <>
              {!segment && (
                <div className="mb-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                    I am a
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {segmentList.map((s) => (
                      <Link
                        key={s.id}
                        href={`/signin/${s.id}`}
                        className="text-center text-xs font-mono uppercase tracking-widest border border-white/10 rounded-md py-3 text-muted-foreground hover:text-white hover:border-white/30 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {segment && (
                <div
                  className="inline-flex items-center gap-2 self-start mb-5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: `${accent}1a`, color: accent, border: `1px solid ${accent}40` }}
                >
                  {segment.product} · {segment.label}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white mb-2">
                {mode === "signin" ? "Welcome back" : "Create account"}
              </h1>
              <p className="text-muted-foreground mb-8">
                {mode === "signin"
                  ? "Sign in to pick up where you left off."
                  : "A few details and you're moving."}
              </p>

              <Tabs value={mode} onValueChange={(v) => setMode(v as "signin" | "signup")} className="w-full">
                <TabsList className="grid grid-cols-2 w-full bg-white/5 rounded-none h-11 mb-8">
                  <TabsTrigger value="signin" className="rounded-none font-mono text-xs uppercase tracking-widest">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-none font-mono text-xs uppercase tracking-widest">
                    Create Account
                  </TabsTrigger>
                </TabsList>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(true)}
                    className="border-white/15 bg-transparent text-white hover:bg-white/5 rounded-none h-11 text-sm"
                  >
                    <SiGoogle className="w-4 h-4" /> Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(true)}
                    className="border-white/15 bg-transparent text-white hover:bg-white/5 rounded-none h-11 text-sm"
                  >
                    <SiApple className="w-4 h-4" /> Apple
                  </Button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    or
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <TabsContent value="signup" className="m-0 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Full name
                      </Label>
                      <Input id="name" placeholder="Jordan Rivera" className="rounded-none h-11 bg-white/[0.02] border-white/15" />
                    </div>
                    {segment?.id !== "driver" && (
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Company
                        </Label>
                        <Input id="company" placeholder="Acme Logistics" className="rounded-none h-11 bg-white/[0.02] border-white/15" />
                      </div>
                    )}
                  </TabsContent>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-none h-11 pl-9 bg-white/[0.02] border-white/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Password
                      </Label>
                      {mode === "signin" && (
                        <a href="#" className="text-[11px] text-muted-foreground hover:text-white transition-colors">
                          Forgot?
                        </a>
                      )}
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      className="rounded-none h-11 bg-white/[0.02] border-white/15"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full brand-gradient text-white border-0 rounded-none h-12 font-mono text-xs uppercase tracking-widest hover:opacity-90"
                    data-testid="auth-submit"
                  >
                    {mode === "signin" ? "Sign In" : "Create Account"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Tabs>

              <p className="text-[11px] text-muted-foreground text-center mt-6 leading-relaxed">
                By continuing you agree to Rhymma's Terms of Service and Privacy Policy.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Brand / value side */}
      <div className="relative hidden lg:flex flex-col justify-center px-16 overflow-hidden border-l border-white/5">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: `linear-gradient(135deg, ${accent} 0%, transparent 60%)` }}
        />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: accent }} />

        <div className="relative z-10 max-w-md">
          <div className="font-mono text-xs uppercase tracking-widest brand-gradient-text mb-6">
            {segment ? segment.product : "Logistics Intelligence Platform"}
          </div>
          <h2 className="text-4xl xl:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8 leading-tight">
            {segment ? segment.headline : "Empowering you with better information."}
          </h2>

          <ul className="space-y-4">
            {(segment ? segment.features : [
              "End-to-end trip optimization",
              "Predictive scheduling intelligence",
              "A single source of truth for every load",
            ]).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-white/85">
                <span
                  className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${accent}26` }}
                >
                  <Check className="w-3 h-3" style={{ color: accent }} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-muted-foreground italic">
            "Rhymma gives us persistent visibility across every load, every window, every mile."
          </div>
        </div>
      </div>
    </div>
  );
}
