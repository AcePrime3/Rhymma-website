import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const termsSections = [
  {
    title: "Agreement Overview",
    body: "These Terms of Service are a binding agreement between Rhymma, Inc. and the person or entity using the Services. By creating an account, clicking to accept these Terms, purchasing a subscription, or otherwise accessing the Services, you agree to these Terms."
  },
  {
    title: "Eligibility and Authority",
    body: "You must be at least 18 years old and legally capable of entering into a binding contract. If you use the Services for an organization, you represent that you are authorized to bind that organization and that your use complies with its policies and applicable law."
  },
  {
    title: "The Services",
    body: "Rhymma provides software intended to help users and organizations understand and coordinate operational activity involving trucks, loads, drivers, facilities, schedules, routes, wait times, detention, congestion, readiness, capacity, and related activity. The features available to you may depend on your plan, account configuration, region, integrations, or release status."
  },
  {
    title: "Accounts and Security",
    body: "Certain Services require an account. You agree to provide accurate information, keep it current, protect your credentials, use reasonable security practices, restrict access to authorized individuals, and notify Rhymma promptly of suspected unauthorized access."
  },
  {
    title: "Acceptable Use",
    body: "You may not use the Services to violate law, infringe rights, engage in fraud or abuse, facilitate unsafe transportation activity, circumvent legal or regulatory requirements, upload malicious code, interfere with the Services, gain unauthorized access, or misuse the Services in any other way."
  },
  {
    title: "Customer Content",
    body: "You remain responsible for the content you submit, upload, or transmit through the Services. You represent that you have the right to provide that content and that it does not violate these Terms or applicable law."
  },
  {
    title: "Fees, Billing, and Termination",
    body: "If you purchase a paid plan, you agree to pay the applicable fees and taxes. Rhymma may suspend or terminate access where necessary to protect the Services, enforce these Terms, or comply with law."
  },
  {
    title: "Contact Us",
    body: "If you have questions about these Terms of Service, please contact us at info@rhymma.com."
  },
];

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
          <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 space-y-8">
            {termsSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-display font-semibold uppercase tracking-wide text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-base leading-8 text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
