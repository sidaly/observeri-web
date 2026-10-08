import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
const Solutions = lazy(() => import("./pages/Solutions"));
const IndustrySolution = lazy(() => import("./pages/IndustrySolution"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const ConsultancyService = lazy(() => import("./pages/ConsultancyService"));
const Partners = lazy(() => import("./pages/Partners"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blogs = lazy(() => import("./pages/Blogs"));
const ThirdPartyRisk = lazy(() => import("./pages/ThirdPartyRisk"));
const CyberRiskManagement = lazy(() => import("./pages/CyberRiskManagement"));
const VulnerabilityOperations = lazy(() => import("./pages/VulnerabilityOperations"));
const AiRiskOperationsCenter = lazy(() => import("./pages/AiRiskOperationsCenter"));
const SecurityGovernance = lazy(() => import("./pages/SecurityGovernance"));
const ExposureManagement = lazy(() => import("./pages/ExposureManagement"));
const ExternalAttackSurfaceManagement = lazy(() => import("./pages/ExternalAttackSurfaceManagement"));
const DataPrivacyProtection = lazy(() => import("./pages/DataPrivacyProtection"));
const ComplianceManagement = lazy(() => import("./pages/ComplianceManagement"));
const InformationAssetManagement = lazy(() => import("./pages/InformationAssetManagement"));
const HumanRiskManagement = lazy(() => import("./pages/HumanRiskManagement"));
const AwsMarketplaceRegister = lazy(() => import("./pages/AwsMarketplaceRegister"));
const AwsMarketplaceConfirm = lazy(() => import("./pages/AwsMarketplaceConfirm"));
const AwsMarketplaceVerify = lazy(() => import("./pages/AwsMarketplaceVerify"));
const AwsMarketplaceLogin = lazy(() => import("./pages/AwsMarketplaceLogin"));
const AwsMarketplaceAdmin = lazy(() => import("./pages/AwsMarketplaceAdmin"));
const AwsMarketplaceSubscribe = lazy(() => import("./pages/AwsMarketplaceSubscribe"));
import { PageSeo } from "./components/PageSeo";

const Team = lazy(() => import("./pages/Team"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageSeo />
        <Suspense fallback={<div role="status" className="min-h-screen bg-background p-12 text-foreground">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
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
          <Route path="/aws-marketplace/register" element={<AwsMarketplaceRegister />} />
          <Route path="/aws-marketplace/confirm" element={<AwsMarketplaceConfirm />} />
          <Route path="/aws-marketplace/verify" element={<AwsMarketplaceVerify />} />
          <Route path="/aws-marketplace/login" element={<AwsMarketplaceLogin />} />
          <Route path="/aws-marketplace/admin" element={<AwsMarketplaceAdmin />} />
          <Route path="/aws-marketplace/subscribe" element={<AwsMarketplaceSubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
