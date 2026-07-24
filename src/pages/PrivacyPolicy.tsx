import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const privacySections = [
  {
    title: "Overview",
    body: "This Privacy Policy explains how Rhymma, Inc., a Delaware corporation (\"Rhymma,\" \"we,\" \"us,\" or \"our\"), collects, uses, discloses, retains, and protects Personal Information in connection with Rhymma’s websites, applications, dashboards, APIs, software, predictive and operational-intelligence services, support, sales, marketing, research, and other interactions with Rhymma. Together, these are the Services."
  },
  {
    title: "What We Collect",
    body: "We collect account and identity information, business and operational information, user content, payment and transaction information, communications, device and usage data, cookies and similar technologies, location data, information from integrations and third parties, and derived information and predictions. Some operational information may constitute Personal Information when it relates to an identifiable individual."
  },
  {
    title: "How We Use It",
    body: "Rhymma may use Personal Information to provide and operate the Services, improve and develop them, communicate with users, protect the Services and others, and comply with law and manage our business. We may also use aggregated or de-identified information to improve the Services as long as it is not reasonably capable of identifying an individual or customer."
  },
  {
    title: "Artificial Intelligence and Automated Outputs",
    body: "The Services may use statistical models, machine learning, artificial intelligence, or other automated methods to produce operational predictions, recommendations, classifications, scores, summaries, or alerts. These outputs are intended to support human judgment and are not intended to make final decisions regarding hiring, termination, credit, housing, insurance, healthcare, legal rights, or other legally significant decisions."
  },
  {
    title: "How We Share It",
    body: "We may disclose Personal Information to service providers and contractors, business customers and their authorized administrators, affiliates, legal and regulatory authorities, professional advisors, and other parties in connection with business transactions or as required by law."
  },
  {
    title: "Your Choices and Rights",
    body: "Depending on applicable law, you may have rights to access, correct, delete, or restrict certain Personal Information, to object to or limit certain processing, and to receive a copy of your information in a portable format. To exercise these rights, please contact us at info@rhymma.com."
  },
  {
    title: "Security and Retention",
    body: "We use reasonable administrative, technical, and organizational safeguards to protect Personal Information, although no system is completely secure. We retain Personal Information for as long as necessary to provide the Services, fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements."
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or the handling of your information, please contact us at info@rhymma.com."
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,135,30,0.12),_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
              Privacy Policy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-5">
              Privacy policy
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
            {privacySections.map((section) => (
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
