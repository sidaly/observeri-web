import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Newsroom from "./pages/Newsroom";
import Solutions from "./pages/Solutions";
import IndustrySolution from "./pages/IndustrySolution";
import FeaturesPage from "./pages/FeaturesPage";
import ConsultancyService from "./pages/ConsultancyService";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/consultancy-service" element={<ConsultancyService />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<IndustrySolution />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
