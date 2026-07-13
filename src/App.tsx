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
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import ThirdPartyRisk from "./pages/ThirdPartyRisk";
import CyberRiskManagement from "./pages/CyberRiskManagement";
import VulnerabilityOperations from "./pages/VulnerabilityOperations";
import AiRiskOperationsCenter from "./pages/AiRiskOperationsCenter";
import SecurityGovernance from "./pages/SecurityGovernance";
import ExposureManagement from "./pages/ExposureManagement";
import ExternalAttackSurfaceManagement from "./pages/ExternalAttackSurfaceManagement";
import DataPrivacyProtection from "./pages/DataPrivacyProtection";
import ComplianceManagement from "./pages/ComplianceManagement";
import InformationAssetManagement from "./pages/InformationAssetManagement";
import HumanRiskManagement from "./pages/HumanRiskManagement";
import { PageSeo } from "./components/PageSeo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageSeo />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/products/third-party-risk" element={<ThirdPartyRisk />} />
          <Route path="/products/cyber-risk-management" element={<CyberRiskManagement />} />
          <Route path="/products/vulnerability-operations" element={<VulnerabilityOperations />} />
          <Route path="/products/ai-risk-operations-center" element={<AiRiskOperationsCenter />} />
          <Route path="/products/security-governance" element={<SecurityGovernance />} />
          <Route path="/products/exposure-management" element={<ExposureManagement />} />
          <Route path="/products/external-attack-surface-management" element={<ExternalAttackSurfaceManagement />} />
          <Route path="/products/compliance-management" element={<ComplianceManagement />} />
          <Route path="/products/information-asset-management" element={<InformationAssetManagement />} />
          <Route path="/products/human-risk-management" element={<HumanRiskManagement />} />
          <Route path="/products/data-privacy-protection" element={<DataPrivacyProtection />} />
          <Route path="/consultancy-service" element={<ConsultancyService />} />
          <Route path="/partners" element={<Partners />} />
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
