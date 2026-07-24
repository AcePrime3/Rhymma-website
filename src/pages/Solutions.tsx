import { Link } from "wouter";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function Solutions() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,135,30,0.12),_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
              Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-5">
              Built for the people moving freight every day
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-8">
              Rhymma helps teams coordinate operations, keep drivers informed, and make faster decisions with
              real-time visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "For Drivers",
                description: "Stay aligned with dispatch, access the info you need, and keep communication simple.",
              },
              {
                title: "For Facilities",
                description: "Coordinate arrivals, staffing, and handoffs with fewer delays and better visibility.",
              },
              {
                title: "For Carriers",
                description: "Monitor performance, support your teams, and improve execution across operations.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-xl font-display font-semibold uppercase tracking-wide mb-3">{item.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/get-started" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-[#F2871E] hover:text-[#FFB36B] transition-colors">
              Explore the platform
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
