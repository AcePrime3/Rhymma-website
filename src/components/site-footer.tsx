import { Link } from "wouter";
import rhymmaTaglineImg from "@assets/logo-tagline-white.svg";

const solutions = [
  { label: "For Drivers", href: "/signin/driver" },
  { label: "For Facilities", href: "/signin/facility" },
  { label: "For Carriers", href: "/signin/carrier" },
];

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#05050A] border-t border-white/5 pt-12 sm:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img
              src={rhymmaTaglineImg}
              alt="Rhymma - Logistics Intelligence Platform"
              className="h-10 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm max-w-sm">
              Mission-driven logistics intelligence respecting the hard work of drivers while giving
              enterprise supply chain managers the edge they need.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left text-xs text-muted-foreground font-mono">
          &copy; 2025 Rhymma. A Logistics Intelligence Platform.
        </div>
      </div>
    </footer>
  );
}
