import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rhymmaLogo from "@assets/Rhymma_logo_orange_Gradiant_1776087102147.png";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about-us" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={rhymmaLogo} alt="Rhymma Logo" className="h-6 sm:h-7 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/signin"
            className="hidden md:inline-flex text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Button
            asChild
            className="brand-gradient-border bg-transparent hover:bg-transparent text-white rounded-none px-4 sm:px-6 h-8 sm:h-10 font-mono text-[10px] sm:text-xs uppercase tracking-widest relative overflow-hidden group"
            data-testid="nav-get-started"
          >
            <Link href="/get-started">
              <span className="relative z-10 group-hover:brand-gradient-text transition-all duration-300">
                Get Started
              </span>
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {[...navItems, { label: "Sign In", href: "/signin" }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
