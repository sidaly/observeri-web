import { industrySolutionsBySlug } from "@/data/industrySolutions";

export type PageSeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
};

export const defaultPageSeo: PageSeoConfig = {
  title: "Observeri | Cybersecurity GRC Platform & AI Risk Management Software",
  description:
    "Enterprise cybersecurity GRC and AI risk management with continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerability prioritization, and dark web monitoring—plus integrated governance, compliance, FAIR-style quantification, UAE and Middle East programs, and modern alternatives to legacy GRC suites.",
  keywords:
    "SAMA cybersecurity compliance guide, NESA UAE GRC software, GRC platform Dubai, ISO 27001 automation, UAE cyber risk quantification, FAIR risk quantification, fintech, MetricStream alternative, MEA RSA Archer alternative, UAE AI GRC platform, Middle East, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring",
  ogImage: "/grc-sphere-full-logo.png",
};

export const pageSeoByPath: Record<string, PageSeoConfig> = {
  "/": defaultPageSeo,
  "/about": {
    title: "About Observeri | Cybersecurity GRC & AI Risk Intelligence",
    description:
      "Learn how Observeri Technologies builds AI-powered cybersecurity GRC for enterprises—unifying risk, compliance, and security operations across the UAE, Middle East, and global regulated industries.",
    keywords: "Observeri Technologies, about Observeri, cybersecurity GRC company, UAE GRC platform, AI risk management",
  },
  "/career": {
    title: "Careers at Observeri | Join Our GRC & Cybersecurity Team",
    description:
      "Explore open roles at Observeri Technologies and help build the next generation of AI-driven governance, risk, and compliance software.",
    keywords: "Observeri careers, GRC jobs, cybersecurity careers UAE, risk management jobs",
  },
  "/newsroom": {
    title: "Newsroom | Observeri Technologies Press & Updates",
    description:
      "Latest news, announcements, and media coverage from Observeri Technologies on cybersecurity GRC, AI risk management, and enterprise compliance.",
    keywords: "Observeri news, GRC press, cybersecurity announcements",
  },
  "/blogs": {
    title: "GRC & Cybersecurity Blog | Observeri Insights",
    description:
      "Expert articles on cybersecurity GRC, AI risk management, compliance automation, vendor risk, FAIR quantification, and audit readiness from Observeri.",
    keywords: "GRC blog, cybersecurity blog, risk management articles, compliance automation insights",
  },
  "/features": {
    title: "GRC Platform Modules | Observeri AI Risk & Compliance Software",
    description:
      "Explore Observeri GRC modules: continuous attack surface management, external attack surface monitoring, AI Risk Operations Center, threat monitoring, threat feeds, vulnerability operations, compliance management, third party risk, and executive dashboards.",
    keywords:
      "GRC modules, AI GRC platform, cybersecurity GRC software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, risk intelligence modules, compliance management software",
  },
  "/products/third-party-risk": {
    title: "Third Party Risk Management Software | Observeri GRC TPRM",
    description:
      "Observeri Third Party Risk Management: continuous vendor discovery, AI risk prioritization, automated evidence collection, gap remediation, and audit-ready vendor dossiers.",
    keywords:
      "third party risk management software, TPRM platform, vendor risk management, vendor risk assessment tool, third party cyber risk management, vendor risk cybersecurity platform",
    ogImage: "/third_party_risk.png",
  },
  "/products/cyber-risk-management": {
    title: "Cyber Risk Management Software | Live Scoring & Control Mapping | Observeri",
    description:
      "Observeri Cyber Risk Management connects risks to live controls and assets, updates scores autonomously, and delivers AI prioritization, FAIR quantification, and audit-ready reporting.",
    keywords:
      "cyber risk management software, risk register software, AI risk management, FAIR risk quantification, control assessment platform, cyber risk scoring platform, integrated risk management software",
    ogImage: "/predictive_risk_intelligence.png",
  },
  "/products/vulnerability-operations": {
    title: "Vulnerability Operations Software | SLA Tracking & Exploitability Prioritization | Observeri",
    description:
      "Observeri Vulnerability Operations: ingest CVEs and vulnerabilities via API or Excel, prioritize with exploitability scoring and threat feeds, track defined SLAs, get AI remediation recommendations, and convert findings into managed remediation programmes.",
    keywords:
      "vulnerability management software, vulnerabilities, vulnerability tracking, vulnerability prioritization, EPSS prioritization, CVE management, threat feeds, threat monitoring, vulnerability SLA tracking, vulnerability remediation platform, exploitability scoring",
    ogImage: "/vulnerability_operations.png",
  },
  "/products/ai-risk-operations-center": {
    title: "AI Risk Operations Center | Unified Risk Intelligence & Asset Risk Scoring | Observeri",
    description:
      "Observeri AI Risk Operations Center augments incidents, risks, vulnerabilities, threats, and compliance issues into live asset risk scores—with threat monitoring, threat feeds, and continuous threat exposure management to focus remediation on 80% risk reduction.",
    keywords:
      "AI risk operations center, asset risk scoring, continuous risk exposure, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, AI GRC platform, unified risk intelligence, crown jewel protection, risk reduction targeting, cyber risk exposure platform",
    ogImage: "/ai_risk_operation.png",
  },
  "/products/security-governance": {
    title: "Security Governance Software | KRI/KPI, Policy, AI Budgeting & Change Management | Observeri",
    description:
      "Observeri Security Governance: KRI/KPI monitoring, AI policy management, risk-informed AI budgeting, change management for security tools and processes, and dedicated project management for CISOs and boards.",
    keywords:
      "security governance software, KRI KPI monitoring, policy management software, AI security budgeting, change management GRC, security project management, governance risk compliance",
    ogImage: "/governance_management.png",
  },
  "/products/exposure-management": {
    title: "Exposure Management Software | CASM, ASM, Threat Monitoring & Dark Web | Observeri",
    description:
      "Observeri Exposure Management: continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerability correlation, and dark web monitoring—plus assessment planning, issues hub, remediation, and AI threat analysis.",
    keywords:
      "exposure management software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, attack surface management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, compliance issue tracking, remediation hub, AI threat analysis, audit issue management, security assessment planning, SLA remediation tracking",
    ogImage: "/threats.png",
  },
  "/products/compliance-management": {
    title: "Compliance Management Software | AI Register, Self-Assessment & Regulatory Tracking | Observeri",
    description:
      "Observeri Compliance Management: maintain regulations and standards, AI-generated compliance registers from uploaded documentation, automated horizon scanning self-assessments with confidence scores, regulatory submission tracking with SLA, incident and breach management, and AI policy gap remediation.",
    keywords:
      "compliance management software, AI compliance register, regulatory compliance tracking, horizon scanning, compliance self-assessment, regulatory submission SLA, compliance incidents breaches, policy gap analysis, ISO SOC2 GDPR compliance",
    ogImage: "/compliance_management.png",
  },
  "/products/information-asset-management": {
    title: "Information Asset Management | AI Risk Scoring & Unified Exposure View | Observeri",
    description:
      "Observeri Information Asset Management: ingest assets via API, ETL, or manual entry, receive live AI risk scores and control effectiveness from the AI Risk Operations Center, profile CIA triad impact and business criticality, and explore a unified asset exposure graph across your entire estate.",
    keywords:
      "information asset management, asset inventory software, AI asset risk scoring, control effectiveness per asset, unified exposure view, CIA triad asset profiling, asset register GRC, CMDB integration, live asset risk scores",
    ogImage: "/information_asset_management.png",
  },
  "/products/human-risk-management": {
    title: "Human Risk Management | AI Privileged ID Scanning & HRE Scoring | Observeri",
    description:
      "Observeri Human Risk Management: AI continuously scans high-risk privileged identities, calculates Human Risk Exposure (HRE) scores using asset risk, privilege impact, access probability, trust factor, and environmental risk, with ML analytics, automated controls, and financial exposure quantification.",
    keywords:
      "human risk management, privileged identity monitoring, HRE scoring, insider threat detection, identity risk scoring, privileged access review, human cyber risk model, automated access controls, financial exposure people risk",
    ogImage: "/human_risk_management.png",
  },
  "/products/data-privacy-protection": {
    title: "Data Privacy & Protection | PII Detection, NER Scanning & Exposure Scoring | Observeri",
    description:
      "Observeri Data Privacy & Protection: PII detection and classification, sensitive data discovery, secret and credential scanning, NER-based identification, data exposure scoring, and unified classification across connected sources.",
    keywords:
      "data privacy software, PII detection, sensitive data discovery, secret scanning, credential scanning, NER data identification, data exposure scoring, data classification, GDPR data discovery, PDPL compliance",
    ogImage: "/data_privacy_protection.png",
  },
  "/consultancy-service": {
    title: "GRC & Cybersecurity Consultancy | Observeri Advisory Services",
    description:
      "Observeri consultancy services: security architecture, incident response readiness, GRC integration, red teaming, forensic investigation, and cyber maturity assessments.",
    keywords: "GRC consultancy, cybersecurity advisory, incident response consulting, security architecture UAE",
  },
  "/partners": {
    title: "Partner Program | Observeri GRC & Cybersecurity Partners",
    description:
      "Join the Observeri partner ecosystem—resellers, auditors, and technology partners delivering AI-powered GRC to enterprises worldwide.",
    keywords: "Observeri partners, GRC partner program, cybersecurity reseller, audit partners",
  },
  "/solutions": {
    title: "Industry GRC Solutions | Observeri for Regulated Sectors",
    description:
      "Industry-specific GRC solutions for banking, fintech, healthcare, energy, retail, and technology—tailored compliance, risk, and security workflows.",
    keywords: "industry GRC solutions, banking GRC, fintech compliance, healthcare GRC, energy cybersecurity",
  },
};

export const getPageSeoForPath = (pathname: string): PageSeoConfig => {
  const exact = pageSeoByPath[pathname];
  if (exact) {
    return exact;
  }

  const industryMatch = pathname.match(/^\/solutions\/([^/]+)$/);
  if (industryMatch) {
    const industry = industrySolutionsBySlug[industryMatch[1]];
    if (industry) {
      return {
        title: `${industry.label} GRC Solution | Observeri`,
        description: `${industry.headline} ${industry.summary}`,
        keywords: `${industry.shortLabel} GRC, ${industry.keyRegulations.join(", ")}, Observeri industry solution`,
      };
    }
  }

  if (pathname === "/404" || pathname.match(/^\/[^/]+$/)) {
    return {
      title: "Page Not Found | Observeri",
      description: "The page you are looking for could not be found. Explore Observeri GRC modules and industry solutions.",
    };
  }

  return defaultPageSeo;
};
