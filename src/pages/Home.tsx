import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, Activity, Zap, Play, Terminal, Database, Cable, ChevronRight } from "lucide-react";
import rhymmaIcon from "@assets/icon_Gradiant_orange_1776087317531.png";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const panelSegment: Record<string, string> = {
  drivers: "driver",
  facilities: "facility",
  "supply-chain": "carrier",
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveTab(0);
      } else if (latest < 0.66) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    });
  }, [scrollYProgress]);

  const mapPoints = [
    { x: 10, y: 20 }, { x: 40, y: 15 }, { x: 70, y: 30 },
    { x: 20, y: 60 }, { x: 50, y: 50 }, { x: 80, y: 70 },
    { x: 30, y: 80 }, { x: 60, y: 85 }, { x: 90, y: 40 }
  ];

  const panels = [
    {
      id: "drivers",
      title: "Driver-Focused Optimization",
      desc: "Rhymma provides tools that assist",
      descHighlight: "YOU",
      descSuffix: "through all your trips.",
      features: [
        "Planning your fuel stops based on how you drive",
        "Optimal rest locations for longer OTR trips",
        "Avoid congestion & known bottlenecks",
        "Decrease your delays and get optimal driver arrival windows",
        "Identify your best pickup opportunity"
      ],
      callout: null,
      note: null,
      primaryCTA: "Contact Us",
      secondaryCTA: null
    },
    {
      id: "facilities",
      title: "Predictive Facility Readiness",
      desc: "Connecting the driver to YOU in a greater level",
      descHighlight: null,
      descSuffix: null,
      features: [
        "More predictable truck arrivals",
        "Increased dock efficiency",
        "Better production scheduling",
        "Increased distribution bottleneck problem solving"
      ],
      callout: "A quick get-in, get-out operational model",
      note: null,
      primaryCTA: "Contact Us",
      secondaryCTA: null
    },
    {
      id: "supply-chain",
      title: "Supply Chain Synchronization",
      desc: "Connecting you, our truck driver, the destination and the facility through Rhymma.",
      descHighlight: null,
      descSuffix: null,
      features: [
        "Faster movement providers",
        "Lower operational costs",
        "Reduced fuel waste",
        "Safer, more predictable operations"
      ],
      callout: null,
      note: "The goal is not simply asking what's happening on that trip then moving on to the next order. Rhymma gives you persistent visibility across every load, every window, every mile.",
      primaryCTA: "Contact Us",
      secondaryCTA: null
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] pt-16 sm:pt-20 flex items-center border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-0 lg:h-full items-center">
          
          <div className="flex flex-col justify-center z-10">
            <div className="inline-block mb-5 sm:mb-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest brand-gradient-text self-start border border-white/10 px-3 sm:px-4 py-1.5 rounded-full bg-white/5">
              Logistics Intelligence Platform
            </div>
            
            <h1 className="text-[2.6rem] leading-[0.88] sm:text-6xl lg:text-8xl xl:text-[7rem] font-bold font-display uppercase tracking-tight mb-6 sm:mb-8">
              <span className="block">Empowering</span>
              <span className="block brand-gradient-text">You</span>
            </h1>
            
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-white mb-4 sm:mb-6">
              With Better Information and Smarter Tools.
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed">
              End to End trip optimization, Facility driver interface and Predictive scheduling intelligence.
            </p>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="brand-gradient text-white border-0 rounded-none h-12 sm:h-14 px-6 sm:px-8 font-mono text-xs sm:text-sm uppercase tracking-widest hover:opacity-90 transition-opacity" data-testid="hero-get-started">
                <Link href="/get-started">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[600px]">
                {/* Abstract Route Map */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M 10 20 C 25 15, 30 40, 40 15 C 55 20, 60 50, 70 30"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  <motion.path
                    d="M 20 60 C 35 70, 40 40, 50 50 C 65 60, 70 80, 80 70"
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M 40 15 C 45 35, 45 45, 50 50 C 55 55, 55 65, 60 85"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F2871E" />
                      <stop offset="50%" stopColor="#DB5A0E" />
                      <stop offset="100%" stopColor="#A83E0A" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Nodes */}
                {mapPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full brand-gradient z-10"
                    style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(244, 165, 74, 0.4)",
                        "0 0 0 10px rgba(244, 165, 74, 0)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}

                {/* Decorative UI elements overlay */}
                <div className="absolute top-[20%] right-[10%] bg-white/5 border border-white/10 backdrop-blur-md p-4 flex items-center gap-4">
                  <Activity className="w-5 h-5 brand-gradient-text" />
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Live ETA</div>
                    <div className="text-sm font-mono text-white">14:22 EST</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A83E0A]/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F2871E]/10 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/5 bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-6 md:gap-4 md:divide-x divide-white/10">
            <div className="flex-1 text-center px-2 sm:px-4">
              <div className="text-lg sm:text-xl font-display font-bold text-white mb-1 sm:mb-2">Real-Time</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">Intelligence</div>
            </div>
            <div className="flex-1 text-center px-2 sm:px-4">
              <div className="text-lg sm:text-xl font-display font-bold text-white mb-1 sm:mb-2">Driver-First</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">Design</div>
            </div>
            <div className="flex-1 text-center px-2 sm:px-4">
              <div className="text-lg sm:text-xl font-display font-bold text-white mb-1 sm:mb-2">Enterprise</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Drivers Statement */}
      <section className="py-20 bg-[#080810] border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2871E]/5 via-transparent to-[#A83E0A]/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6"
          >
            Our philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight leading-tight"
          >
            <span className="text-white">Elevate drivers.</span>
            <br />
            <span className="brand-gradient-text">Not replace them.</span>
          </motion.h2>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section ref={scrollContainerRef} className="relative h-[300vh] bg-[#0A0A0F]">
        <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 w-full">

            {/* Mobile Tab Bar */}
            <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
              {["For Drivers", "For Facilities", "For Supply Chain"].map((label, index) => (
                <div
                  key={label}
                  className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                    activeTab === index
                      ? "brand-gradient text-white border-transparent"
                      : "border-white/10 text-white/30"
                  }`}
                >
                  {label.replace("For ", "")}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 h-full">
              
              {/* Left Sidebar - Sticky Navigation (Desktop only) */}
              <div className="hidden lg:flex lg:col-span-4 h-full flex-col justify-center relative">
                {/* Progress Line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[300px] bg-white/5">
                  <motion.div 
                    className="absolute top-0 left-0 w-full brand-gradient origin-top"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>

                <div className="pl-12 space-y-12">
                  {["For Drivers", "For Facilities", "For Supply Chain"].map((label, index) => (
                    <div 
                      key={label}
                      className={`text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight transition-all duration-500 ${activeTab === index ? "text-white scale-105 origin-left" : "text-white/20"}`}
                    >
                      {activeTab === index ? (
                        <span className="brand-gradient-text">{label}</span>
                      ) : (
                        label
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Sliding Panels */}
              <div className="col-span-12 lg:col-span-8 lg:py-32 relative flex items-start lg:items-center overflow-y-auto lg:overflow-visible" style={{ maxHeight: 'calc(100dvh - 120px)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="bg-white/[0.02] border border-white/5 p-5 sm:p-8 lg:p-12 rounded-2xl backdrop-blur-md relative overflow-hidden">
                      {/* Subtle background glow */}
                      <div className="absolute -top-32 -right-32 w-64 h-64 brand-gradient rounded-full blur-[120px] opacity-20 pointer-events-none" />
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold uppercase text-white mb-4 sm:mb-6 leading-tight">
                        {panels[activeTab].title}
                      </h3>
                      
                      <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-10 max-w-2xl leading-relaxed">
                        {panels[activeTab].descHighlight ? (
                          <>
                            {panels[activeTab].desc}{" "}
                            <span className="brand-gradient-text font-bold text-xl">{panels[activeTab].descHighlight}</span>
                            {" "}{panels[activeTab].descSuffix}
                          </>
                        ) : (
                          panels[activeTab].desc
                        )}
                      </p>

                      <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-12">
                        {panels[activeTab].features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5"
                          >
                            <div className="mt-0.5 min-w-[20px] sm:min-w-[24px]">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full brand-gradient p-[1px]">
                                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                </div>
                              </div>
                            </div>
                            <span className="text-white/90 text-sm sm:text-base">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {panels[activeTab].callout && (
                        <div className="mb-10 p-6 border-l-2 border-[#F2871E] bg-white/[0.02]">
                          <div className="text-xs font-mono uppercase tracking-widest brand-gradient-text mb-2">Our Goal</div>
                          <div className="text-lg text-white font-medium">{panels[activeTab].callout}</div>
                        </div>
                      )}

                      {panels[activeTab].note && (
                        <div className="mb-10 p-6 border-l-2 border-[#A83E0A] bg-white/[0.02]">
                          <p className="text-muted-foreground italic">{panels[activeTab].note}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <Button asChild className="brand-gradient text-white border-0 rounded-none h-11 sm:h-14 px-6 sm:px-8 font-mono text-xs sm:text-sm uppercase tracking-widest hover:opacity-90">
                          <Link href={panels[activeTab].primaryCTA === "Contact Us" ? "/contact" : `/signin/${panelSegment[panels[activeTab].id]}`}>
                            {panels[activeTab].primaryCTA}
                          </Link>
                        </Button>
                        {panels[activeTab].secondaryCTA && (
                          <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/5 rounded-none h-11 sm:h-14 px-6 sm:px-8 font-mono text-xs sm:text-sm uppercase tracking-widest">
                            <Link href={panels[activeTab].secondaryCTA === "Contact Us" ? "/contact" : "/get-started"}>
                              {panels[activeTab].secondaryCTA}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-32 bg-background border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-24 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase text-white mb-4 sm:mb-6">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">Seamless integration from driver to destination.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />

            <div className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm text-center group hover:bg-white/[0.04] transition-colors">
              <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8 brand-gradient-border">
                <Cable className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:text-[#F2871E] transition-colors" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F2871E] mb-4">Step 1</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Connect</h3>
              <p className="text-muted-foreground">Your drivers, facilities, and supply chain partners flow through a single intelligent system, built around the trip, not the spreadsheet.</p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm text-center group hover:bg-white/[0.04] transition-colors">
              <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8 brand-gradient-border">
                <Database className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:text-[#DB5A0E] transition-colors" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#DB5A0E] mb-4">Step 2</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Analyze</h3>
              <p className="text-muted-foreground">Process real-time data to identify bottlenecks and predict facility readiness.</p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm text-center group hover:bg-white/[0.04] transition-colors">
              <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8 brand-gradient-border">
                <Terminal className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:text-[#A83E0A] transition-colors" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#A83E0A] mb-4">Step 3</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Optimize</h3>
              <p className="text-muted-foreground">Deploy intelligent routing and scheduling for maximum throughput.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-40 bg-[#080810] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#A83E0A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 sm:mb-12">
            <span className="brand-gradient-text">Ready to move smarter?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            <Button asChild size="lg" className="brand-gradient text-white border-0 rounded-none h-13 sm:h-16 px-8 sm:px-10 font-mono text-xs sm:text-sm uppercase tracking-widest hover:opacity-90 w-full sm:w-auto">
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/5 rounded-none h-13 sm:h-16 px-8 sm:px-10 font-mono text-xs sm:text-sm uppercase tracking-widest w-full sm:w-auto">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>

          <img src={rhymmaIcon} alt="Rhymma Icon" className="h-14 w-auto mx-auto opacity-50" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
