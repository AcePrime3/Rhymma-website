import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import GetStarted from "@/pages/GetStarted";
import SignIn from "@/pages/SignIn";
import Contact from "@/pages/Contact";
import Company from "@/pages/Company";
// Temporarily removed from navigation. Pages kept for when we bring them back:
// import Pricing from "@/pages/Pricing";
// import Resources from "@/pages/Resources";
// import CaseStudies from "@/pages/CaseStudies";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signin/:segment" component={SignIn} />
      <Route path="/company" component={Company} />
      {/* Temporarily removed from navigation. Restore these when ready:
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/case-studies" component={CaseStudies} /> */}
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
