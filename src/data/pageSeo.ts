import { industrySolutionsBySlug } from "@/data/industrySolutions";

export type PageSeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
};

export const defaultPageSeo: PageSeoConfig = {
  title: "Cybersecurity GRC Platform & AI Risk Management | Observeri",
  description:
    "Observeri unifies AI-powered governance, risk, compliance, and threat exposure management in one cybersecurity GRC platform for enterprises.",
  keywords:
    "SAMA cybersecurity compliance guide, NESA UAE GRC software, GRC platform Dubai, ISO 27001 automation, UAE cyber risk quantification, FAIR risk quantification, fintech, MetricStream alternative, MEA RSA Archer alternative, UAE AI GRC platform, Middle East, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring",
  ogImage: "/grc-sphere-full-logo.png",
};

export const pageSeoByPath: Record<string, PageSeoConfig> = {
  "/": defaultPageSeo,
  "/about": {
    title: "About Observeri | AI-Powered Cybersecurity GRC Company",
    description:
      "Observeri builds AI-powered cybersecurity GRC software that unifies risk, compliance, and security operations for regulated enterprises.",
    keywords: "Observeri Technologies, about Observeri, cybersecurity GRC company, UAE GRC platform, AI risk management",
  },
  "/career": {
    title: "Careers at Observeri | GRC & Cybersecurity Team Jobs",
    description:
      "Join Observeri and build the next generation of AI-driven governance, risk, and compliance software for global enterprises.",
    keywords: "Observeri careers, GRC jobs, cybersecurity careers UAE, risk management jobs",
  },
  "/newsroom": {
    title: "Newsroom | Observeri Cybersecurity GRC News & Press",
    description:
      "Latest news, announcements, and press coverage from Observeri on cybersecurity GRC, AI risk management, and enterprise compliance.",
    keywords: "Observeri news, GRC press, cybersecurity announcements",
  },
  "/blogs": {
    title: "GRC & Cybersecurity Blog | Expert Observeri Insights",
    description:
      "Expert articles on cybersecurity GRC, AI risk management, compliance automation, vendor risk, FAIR quantification, and audit readiness.",
    keywords: "GRC blog, cybersecurity blog, risk management articles, compliance automation insights",
  },
  "/features": {
    title: "GRC Platform Modules | Observeri AI Risk & Compliance",
    description:
      "Explore Observeri GRC modules: AI Risk Operations Center, attack surface management, vulnerability operations, compliance, and risk dashboards.",
    keywords:
      "GRC modules, AI GRC platform, cybersecurity GRC software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, risk intelligence modules, compliance management software",
  },
  "/products/third-party-risk": {
    title: "Third Party Risk Management Software (TPRM) | Observeri",
    description:
      "Observeri TPRM automates vendor discovery, AI risk prioritization, evidence collection, and gap remediation with audit-ready dossiers.",
    keywords:
      "third party risk management software, TPRM platform, vendor risk management, vendor risk assessment tool, third party cyber risk management, vendor risk cybersecurity platform",
    ogImage: "/third_party_risk.png",
  },
  "/products/cyber-risk-management": {
    title: "Cyber Risk Management Software | FAIR Scoring | Observeri",
    description:
      "Observeri cyber risk management links risks to live controls and assets, auto-updates scores, and adds AI prioritization and FAIR quantification.",
    keywords:
      "cyber risk management software, risk register software, AI risk management, FAIR risk quantification, control assessment platform, cyber risk scoring platform, integrated risk management software",
    ogImage: "/predictive_risk_intelligence.png",
  },
  "/products/vulnerability-operations": {
    title: "Vulnerability Management Software | SLA & EPSS | Observeri",
    description:
      "Observeri Vulnerability Operations ingests CVEs, prioritizes with EPSS and threat feeds, tracks SLAs, and drives AI-guided remediation.",
    keywords:
      "vulnerability management software, vulnerabilities, vulnerability tracking, vulnerability prioritization, EPSS prioritization, CVE management, threat feeds, threat monitoring, vulnerability SLA tracking, vulnerability remediation platform, exploitability scoring",
    ogImage: "/vulnerability_operations.png",
  },
  "/products/ai-risk-operations-center": {
    title: "AI Risk Operations Center | Asset Risk Scoring | Observeri",
    description:
      "Observeri AI Risk Operations Center fuses incidents, risks, vulnerabilities, threats, and compliance into live asset risk scores.",
    keywords:
      "AI risk operations center, asset risk scoring, continuous risk exposure, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, AI GRC platform, unified risk intelligence, crown jewel protection, risk reduction targeting, cyber risk exposure platform",
    ogImage: "/ai-risk-operations-center.png",
  },
  "/products/security-governance": {
    title: "Security Governance Software | KRI/KPI & Policy | Observeri",
    description:
      "Observeri Security Governance delivers KRI/KPI monitoring, AI policy management, risk-informed budgeting, and change management for CISOs.",
    keywords:
      "security governance software, KRI KPI monitoring, policy management software, AI security budgeting, change management GRC, security project management, governance risk compliance",
    ogImage: "/governance_management.png",
  },
  "/products/exposure-management": {
    title: "Exposure Management Software | CTEM & ASM | Observeri",
    description:
      "Observeri Exposure Management unifies attack surface management, threat monitoring, dark web monitoring, issue tracking, and AI remediation.",
    keywords:
      "exposure management software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, attack surface management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, compliance issue tracking, remediation hub, AI threat analysis, audit issue management, security assessment planning, SLA remediation tracking",
    ogImage: "/threats.png",
  },
  "/products/external-attack-surface-management": {
    title: "External Attack Surface Management (EASM) | Observeri",
    description:
      "Observeri EASM continuously discovers domains, hosts, and shadow IT, then maps attack paths, dark web exposure, and cloud risks into GRC.",
    keywords:
      "external attack surface management, EASM software, continuous attack surface management, external attack surface monitoring, shadow IT detection, attack path analysis, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, cloud security posture, web application penetration testing",
    ogImage: "/easm/slide-1.png",
  },
  "/products/compliance-management": {
    title: "Compliance Management Software | ISO & SOC 2 | Observeri",
    description:
      "Observeri Compliance Management maintains regulations, builds AI compliance registers, runs self-assessments, and tracks submissions.",
    keywords:
      "compliance management software, AI compliance register, regulatory compliance tracking, horizon scanning, compliance self-assessment, regulatory submission SLA, compliance incidents breaches, policy gap analysis, ISO SOC2 GDPR compliance",
    ogImage: "/compliance_management.png",
  },
  "/products/information-asset-management": {
    title: "Information Asset Management & Risk Scoring | Observeri",
    description:
      "Observeri Information Asset Management ingests assets, applies live AI risk scores and control effectiveness, and maps a unified exposure view.",
    keywords:
      "information asset management, asset inventory software, AI asset risk scoring, control effectiveness per asset, unified exposure view, CIA triad asset profiling, asset register GRC, CMDB integration, live asset risk scores",
    ogImage: "/information_asset_management.png",
  },
  "/products/human-risk-management": {
    title: "Human Risk Management Software | HRE Scoring | Observeri",
    description:
      "Observeri Human Risk Management scans privileged identities, calculates HRE scores, and quantifies financial exposure with automated controls.",
    keywords:
      "human risk management, privileged identity monitoring, HRE scoring, insider threat detection, identity risk scoring, privileged access review, human cyber risk model, automated access controls, financial exposure people risk",
    ogImage: "/human_risk_management.png",
  },
  "/products/data-privacy-protection": {
    title: "Data Privacy & Protection Software | PII | Observeri",
    description:
      "Observeri Data Privacy & Protection detects PII, discovers sensitive data and secrets, and scores exposure with NER-based classification.",
    keywords:
      "data privacy software, PII detection, sensitive data discovery, secret scanning, credential scanning, NER data identification, data exposure scoring, data classification, GDPR data discovery, PDPL compliance",
    ogImage: "/data_privacy_protection.png",
  },
  "/consultancy-service": {
    title: "GRC & Cybersecurity Consultancy | Observeri Advisory",
    description:
      "Observeri consultancy delivers security architecture, incident response readiness, GRC integration, red teaming, forensics, and maturity assessments.",
    keywords: "GRC consultancy, cybersecurity advisory, incident response consulting, security architecture UAE",
  },
  "/partners": {
    title: "Partner Program | Observeri GRC & Cybersecurity Partners",
    description:
      "Join the Observeri partner ecosystem of resellers, auditors, and technology partners delivering AI-powered GRC to enterprises globally.",
    keywords: "Observeri partners, GRC partner program, cybersecurity reseller, audit partners",
  },
  "/solutions": {
    title: "Industry GRC Solutions | Observeri for Regulated Sectors",
    description:
      "Industry-specific GRC solutions for banking, fintech, healthcare, government, energy, and technology—tailored compliance, risk, and security workflows.",
    keywords: "industry GRC solutions, banking GRC, fintech compliance, healthcare GRC, energy cybersecurity",
  },
  "/solutions/banking-financial-services": {
    title: "Banking & Financial Services GRC Solution | Observeri",
    description:
      "Observeri delivers AI-powered GRC for banks and fintechs, automating CBUAE, DFSA, AML/CFT, SOX, and PCI DSS obligations and risk remediation.",
    keywords: "banking GRC software, financial services compliance, fintech risk management, CBUAE DFSA AML compliance",
  },
  "/solutions/healthcare-life-sciences": {
    title: "Healthcare & Life Sciences GRC Solution | Observeri",
    description:
      "Observeri healthcare GRC secures IoMT ecosystems, protects PHI, and automates HIPAA and privacy compliance with AI risk assessments.",
    keywords: "healthcare GRC software, HIPAA compliance, IoMT security, PHI protection, life sciences risk management",
  },
  "/solutions/government-public-sector": {
    title: "Government & Public Sector GRC Solution | Observeri",
    description:
      "Observeri public-sector GRC unifies governance, sovereign data protection, and automated NESA assurance with audit-ready risk workflows.",
    keywords: "government GRC platform, public sector risk management, NESA compliance, sovereign data protection",
  },
  "/solutions/technology-saas": {
    title: "Technology & SaaS GRC & Compliance Solution | Observeri",
    description:
      "Observeri GRC helps SaaS and technology teams ship fast while automating SOC 2, vendor risk, API visibility, and secure-engineering controls.",
    keywords: "SaaS GRC platform, SOC 2 automation, technology compliance, vendor risk management, DevSecOps GRC",
  },
  "/solutions/retail-ecommerce": {
    title: "Retail & E-commerce GRC & PCI DSS Solution | Observeri",
    description:
      "Observeri retail GRC protects transaction-heavy environments and customer data, automating PCI DSS compliance, vendor risk, and fraud reduction.",
    keywords: "retail GRC software, e-commerce compliance, PCI DSS compliance, customer data protection, fraud risk",
  },
  "/solutions/energy-utilities": {
    title: "Energy & Utilities GRC & OT Security Solution | Observeri",
    description:
      "Observeri GRC secures critical infrastructure with OT-aware risk intelligence and compliance automation for NERC readiness and continuity.",
    keywords: "energy GRC software, utilities cybersecurity, OT security, critical infrastructure risk, NERC compliance",
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
        description: `${industry.headline} ${industry.summary}`.slice(0, 158),
        keywords: `${industry.shortLabel} GRC, ${industry.keyRegulations.join(", ")}, Observeri industry solution`,
      };
    }
  }

  if (pathname === "/404" || pathname.match(/^\/[^/]+$/)) {
    return {
      title: "Page Not Found | Observeri",
      description: "The page you requested could not be found. Explore Observeri GRC modules and industry solutions.",
    };
  }

  return defaultPageSeo;
};
