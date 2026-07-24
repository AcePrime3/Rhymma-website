import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import LegalContent from "@/components/legal-content";
import { termsOfServiceContent } from "@/content/terms-of-service-content";

export default function TermsOfService() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,135,30,0.12),_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
              Terms of Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-5">
              Terms of service
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-8">
              Effective date: July 24, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <LegalContent blocks={termsOfServiceContent} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
