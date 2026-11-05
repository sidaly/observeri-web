import { industrySolutionsBySlug } from "@/data/industrySolutions";
import type { JsonLdSchema } from "@/lib/schema";
import { breadcrumbSchema, faqPageSchema, productSchema } from "@/lib/schema";
import auditSeo from "@/data/auditSeo.json";
import blogPosts from "@/data/posts.json";
import type { BlogPostData } from "@/types/wordpress";
import { blogPostingSchema } from "@/lib/schema";
const faqData = auditSeo["/"].faqs;

export type PageSeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  robots?: string;
  schemas?: JsonLdSchema;
};

export const defaultPageSeo: PageSeoConfig = {
  title: "Cybersecurity GRC Platform & AI Risk Management | Observeri",
  description:
    "Observeri unifies AI-powered governance, risk, compliance, and threat exposure management in one cybersecurity GRC platform for enterprises.",
  keywords:
    "SAMA cybersecurity compliance guide, NESA UAE GRC software, GRC platform Dubai, ISO 27001 automation, UAE cyber risk quantification, FAIR risk quantification, fintech, MetricStream alternative, MEA RSA Archer alternative, UAE AI GRC platform, Middle East, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring",
  ogImage: "/grc-sphere-full-logo.png",
  schemas: [breadcrumbSchema([{ name: "Home" }]), faqPageSchema(faqData)],
};

export const pageSeoByPath: Record<string, PageSeoConfig> = {
  "/": defaultPageSeo,
  "/privacy-policy": {
    title: "Privacy Policy | Observeri Technologies",
    description: "Learn how Observeri handles website enquiries, account information, cookies, and privacy choices, and how to contact us about your personal data.",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Privacy Policy" }]),
  },
  "/terms": {
    title: "Terms of Service | Observeri Technologies",
    description: "Read the terms for using the Observeri Technologies website, submitting enquiries, accessing accounts, and viewing product information.",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Terms of Service" }]),
  },
  "/team": {
    title: "Observeri Team | Built by Risk and Compliance SMEs",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Team", item: "/team" }]),
    description:
      "Meet Michael, Syed Ali Naqvi, Sarah Lawrence, and Anis. Observeri was built by specialists in risk, compliance, country leadership, and product.",
  },
  "/about": {
    title: "About Observeri | One Combined Enterprise Risk View",
    description:
      "Observeri GRC covers enterprise risk as well as cybersecurity. Cyber, operational, technology, financial, and ESG risk combine into one enterprise risk.",
    keywords: "Observeri Technologies, about Observeri, cybersecurity GRC company, UAE GRC platform, AI risk management",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "About" }]),
  },
  "/career": {
    title: "Careers at Observeri | GRC & Cybersecurity Team Jobs",
    description:
      "Join Observeri and build the next generation of AI-driven governance, risk, and compliance software for global enterprises.",
    keywords: "Observeri careers, GRC jobs, cybersecurity careers UAE, risk management jobs",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Careers" }]),
  },
  "/newsroom": {
    title: "Newsroom | Observeri Cybersecurity GRC News & Press",
    description:
      "Latest news, announcements, and press coverage from Observeri on cybersecurity GRC, AI risk management, and enterprise compliance.",
    keywords: "Observeri news, GRC press, cybersecurity announcements",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Newsroom" }]),
  },
  "/blog": {
    title: "GRC & Cybersecurity Blog | Expert Observeri Insights",
    description:
      "Expert articles on cybersecurity GRC, AI risk management, compliance automation, vendor risk, FAIR quantification, and audit readiness.",
    keywords: "GRC blog, cybersecurity blog, risk management articles, compliance automation insights",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Blog" }]),
  },
  "/features": {
    title: "GRC Platform Modules | Observeri AI Risk & Compliance",
    description:
      "Explore Observeri GRC modules: AI Risk Operations Center, attack surface management, vulnerability operations, compliance, and risk dashboards.",
    keywords:
      "GRC modules, AI GRC platform, cybersecurity GRC software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, risk intelligence modules, compliance management software",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Platform Modules" }]),
  },
  "/products/third-party-risk": {
    title: "Third Party Risk Management Software (TPRM) | Observeri",
    description:
      "Observeri TPRM automates vendor discovery, AI risk prioritization, evidence collection, and gap remediation with audit-ready dossiers.",
    keywords:
      "third party risk management software, TPRM platform, vendor risk management, vendor risk assessment tool, third party cyber risk management, vendor risk cybersecurity platform",
    ogImage: "/third_party_risk.webp",
    schemas: [
      productSchema(
        "Observeri Third Party Risk Management",
        "Observeri TPRM automates vendor discovery, AI risk prioritization, evidence collection, and gap remediation with audit-ready dossiers.",
        "/third_party_risk.webp",
        "/products/third-party-risk",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Third Party Risk" }]),
    ],
  },
  "/products/enterprise-risk": {
    title: "Enterprise Risk Index, Appetite, and War Rooms | Observeri",
    description:
      "Roll every risk domain into one global index, with taxonomy, appetite, KRIs, limits, breach response, board packs, and live war rooms.",
    keywords:
      "enterprise risk management, global risk index, risk taxonomy, risk appetite, enterprise KRI, risk matrix, risk limits, board risk pack, risk war room",
    ogImage: "/enterprise-risk.webp",
    schemas: [
      productSchema(
        "Observeri Enterprise Risk",
        "Roll every risk domain into one global index, with taxonomy, appetite, KRIs, limits, breach response, board packs, and live war rooms.",
        "/enterprise-risk.webp",
        "/products/enterprise-risk",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Enterprise Risk" }]),
    ],
  },
  "/products/financial-risk": {
    title: "Financial Risk Limits and Capital Impact | Observeri",
    description:
      "Monitor capital, market, and liquidity risks against organisation-defined limits, with early warning, breach escalation, and regulatory capital impact.",
    keywords:
      "financial risk management, capital risk, market risk, liquidity risk, risk limits, regulatory capital impact, limit breach escalation",
    ogImage: "/financial-risk.webp",
    schemas: [
      productSchema(
        "Observeri Financial Risk",
        "Monitor capital, market, and liquidity risks against organisation-defined limits, with early warning, breach escalation, and regulatory capital impact.",
        "/financial-risk.webp",
        "/products/financial-risk",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Financial Risk" }]),
    ],
  },
  "/products/operational-risk": {
    title: "Operational Risk Management and Capital | Observeri",
    description:
      "Run operational risk end to end: RCSA, live KRIs on each risk, loss events, operational capital, and back-testing under Pillar 1 and Pillar 2.",
    keywords:
      "operational risk management, RCSA, key risk indicators, operational risk capital, Pillar 1, Pillar 2, operational loss events, back-testing",
    ogImage: "/operational-risk.webp",
    schemas: [
      productSchema(
        "Observeri Operational Risk",
        "Run operational risk end to end: RCSA, live KRIs on each risk, loss events, operational capital, and back-testing under Pillar 1 and Pillar 2.",
        "/operational-risk.webp",
        "/products/operational-risk",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Operational Risk" }]),
    ],
  },
  "/products/cyber-risk-management": {
    title: "Cyber Risk Management Software | FAIR Scoring | Observeri",
    description:
      "Observeri cyber risk management links risks to live controls and assets, auto-updates scores, and adds AI prioritization and FAIR quantification.",
    keywords:
      "cyber risk management software, risk register software, AI risk management, FAIR risk quantification, control assessment platform, cyber risk scoring platform, integrated risk management software",
    ogImage: "/predictive_risk_intelligence.webp",
    schemas: [
      productSchema(
        "Observeri Cyber Risk Management",
        "Observeri cyber risk management links risks to live controls and assets, auto-updates scores, and adds AI prioritization and FAIR quantification.",
        "/predictive_risk_intelligence.webp",
        "/products/cyber-risk-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Cyber Risk Management" }]),
    ],
  },
  "/products/ai-governance": {
    title: "AI Model Governance and ISO 22989 Lifecycle | Observeri",
    description:
      "Inventory public and private AI models and govern each system through the seven ISO/IEC 22989:2022 life cycle stages, from inception to retirement.",
    keywords:
      "AI governance, AI model inventory, public and private AI models, ISO/IEC 22989 life cycle, AI lifecycle management, AI model retirement",
    ogImage: "/ai-risk-trust-attestation.webp",
    schemas: [
      productSchema(
        "Observeri AI Governance",
        "Inventory public and private AI models and govern each system through the seven ISO/IEC 22989:2022 life cycle stages, from inception to retirement.",
        "/ai-risk-trust-attestation.webp",
        "/products/ai-governance",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "AI Governance" }]),
    ],
  },
  "/products/ai-data-monitoring": {
    title: "AI Data Monitoring for Prompts and Uploads | Observeri",
    description:
      "Monitor and audit AI prompts on sanctioned tools, block sensitive prompts and file uploads, and keep protected information inside the organization.",
    keywords:
      "AI data monitoring, prompt monitoring, prompt audit, block AI prompts, AI file upload control, AI data loss prevention",
    ogImage: "/ai-data-monitoring.webp",
    schemas: [
      productSchema(
        "Observeri AI Data Monitoring",
        "Monitor and audit AI prompts on sanctioned tools, block sensitive prompts and file uploads, and keep protected information inside the organization.",
        "/ai-data-monitoring.webp",
        "/products/ai-data-monitoring",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "AI Data Monitoring" }]),
    ],
  },
  "/products/ai-risk": {
    title: "AI Model Risk Management for the EU AI Act | Observeri",
    description:
      "Inventory public and private AI models, run STRIDE assessments, apply suggested controls, and treat risk with automatic EU AI Act classification.",
    keywords:
      "AI risk management, EU AI Act classification, AI model inventory, STRIDE threat model, AI suggested controls, AI risk treatment, public and private AI models",
    ogImage: "/ai-risk-dashboard.webp",
    schemas: [
      productSchema(
        "Observeri AI Risk",
        "Inventory public and private AI models, run STRIDE assessments, apply suggested controls, and treat risk with automatic EU AI Act classification.",
        "/ai-risk-dashboard.webp",
        "/products/ai-risk",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "AI Risk" }]),
    ],
  },
  "/products/audit-management": {
    title: "Audit Management Software for Internal Audit | Observeri",
    description:
      "Cover the audit charter, engagement planning, the risk register, control assessment, reporting, resource capacity, and follow-up in one audit workspace.",
    keywords:
      "internal audit management, audit charter, audit planning, audit engagement, audit risk register, audit controls assessment, audit reporting, audit capacity planning, audit follow-up",
    ogImage: "/audit-management.webp",
    schemas: [
      productSchema(
        "Observeri Audit Management",
        "Cover the audit charter, engagement planning, the risk register, control assessment, reporting, resource capacity, and follow-up in one audit workspace.",
        "/audit-management.webp",
        "/products/audit-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Audit Management" }]),
    ],
  },
  "/products/vulnerability-operations": {
    title: "Vulnerability Management Software | SLA & EPSS | Observeri",
    description:
      "Observeri Vulnerability Operations ingests CVEs, prioritizes with EPSS and threat feeds, tracks SLAs, and drives AI-guided remediation.",
    keywords:
      "vulnerability management software, vulnerabilities, vulnerability tracking, vulnerability prioritization, EPSS prioritization, CVE management, threat feeds, threat monitoring, vulnerability SLA tracking, vulnerability remediation platform, exploitability scoring",
    ogImage: "/vulnerability_operations.webp",
    schemas: [
      productSchema(
        "Observeri Vulnerability Operations",
        "Observeri Vulnerability Operations ingests CVEs, prioritizes with EPSS and threat feeds, tracks SLAs, and drives AI-guided remediation.",
        "/vulnerability_operations.webp",
        "/products/vulnerability-operations",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Vulnerability Operations" }]),
    ],
  },
  "/products/ai-risk-operations-center": {
    title: "AI Risk Operations Center | Asset Risk Scoring | Observeri",
    description:
      "Observeri AI Risk Operations Center fuses incidents, risks, vulnerabilities, threats, and compliance into live asset risk scores.",
    keywords:
      "AI risk operations center, asset risk scoring, continuous risk exposure, continuous threat exposure management, threat monitoring, threat feeds, vulnerabilities, AI GRC platform, unified risk intelligence, crown jewel protection, risk reduction targeting, cyber risk exposure platform",
    ogImage: "/ai-risk-operations-center.webp",
    schemas: [
      productSchema(
        "Observeri AI Risk Operations Center",
        "Observeri AI Risk Operations Center fuses incidents, risks, vulnerabilities, threats, and compliance into live asset risk scores.",
        "/ai-risk-operations-center.webp",
        "/products/ai-risk-operations-center",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "AI Risk Operations Center" }]),
    ],
  },
  "/products/security-governance": {
    title: "Security Governance Software | KRI/KPI & Policy | Observeri",
    description:
      "Observeri Security Governance delivers KRI/KPI monitoring, AI policy management, risk-informed budgeting, and change management for CISOs.",
    keywords:
      "security governance software, KRI KPI monitoring, policy management software, AI security budgeting, change management GRC, security project management, governance risk compliance",
    ogImage: "/governance_management.webp",
    schemas: [
      productSchema(
        "Observeri Security Governance",
        "Observeri Security Governance delivers KRI/KPI monitoring, AI policy management, risk-informed budgeting, and change management for CISOs.",
        "/governance_management.webp",
        "/products/security-governance",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Security Governance" }]),
    ],
  },
  "/products/budget-management": {
    title: "Budget Management for Risk-Led Investment | Observeri",
    description:
      "Compare the cost of impact with the cost of mitigation so every investment dollar is driven by risk and compliance, and the board can decide what to fund.",
    keywords:
      "budget management, risk-led investment, cost of impact, cost of mitigation, board investment decision, compliance budget",
    ogImage: "/budget-management.webp",
    schemas: [
      productSchema(
        "Observeri Budget Management",
        "Compare the cost of impact with the cost of mitigation so every investment dollar is driven by risk and compliance, and the board can decide what to fund.",
        "/budget-management.webp",
        "/products/budget-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Budget Management" }]),
    ],
  },
  "/products/exposure-management": {
    title: "Exposure Management Software | CTEM & ASM | Observeri",
    description:
      "Observeri Exposure Management unifies attack surface management, threat monitoring, dark web monitoring, issue tracking, and AI remediation.",
    keywords:
      "exposure management software, continuous attack surface management, external attack surface monitoring, continuous threat exposure management, attack surface management, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, compliance issue tracking, remediation hub, AI threat analysis, audit issue management, security assessment planning, SLA remediation tracking",
    ogImage: "/threats.webp",
    schemas: [
      productSchema(
        "Observeri Exposure Management",
        "Observeri Exposure Management unifies attack surface management, threat monitoring, dark web monitoring, issue tracking, and AI remediation.",
        "/threats.webp",
        "/products/exposure-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Exposure Management" }]),
    ],
  },
  "/products/external-attack-surface-management": {
    title: "External Attack Surface Management (EASM) | Observeri",
    description:
      "Observeri EASM continuously discovers domains, hosts, and shadow IT, then maps attack paths, dark web exposure, and cloud risks into GRC.",
    keywords:
      "external attack surface management, EASM software, continuous attack surface management, external attack surface monitoring, shadow IT detection, attack path analysis, threat monitoring, threat feeds, vulnerabilities, dark web monitoring, cloud security posture, web application penetration testing",
    ogImage: "/easm/slide-1.webp",
    schemas: [
      productSchema(
        "Observeri External Attack Surface Management",
        "Observeri EASM continuously discovers domains, hosts, and shadow IT, then maps attack paths, dark web exposure, and cloud risks into GRC.",
        "/easm/slide-1.webp",
        "/products/external-attack-surface-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "External Attack Surface Management" }]),
    ],
  },
  "/products/compliance-management": {
    title: "Compliance Management Software | ISO & SOC 2 | Observeri",
    description:
      "Observeri Compliance Management maintains regulations, builds AI compliance registers, runs self-assessments, and tracks submissions.",
    keywords:
      "compliance management software, AI compliance register, regulatory compliance tracking, horizon scanning, compliance self-assessment, regulatory submission SLA, compliance incidents breaches, policy gap analysis, ISO SOC2 GDPR compliance",
    ogImage: "/compliance_management.webp",
    schemas: [
      productSchema(
        "Observeri Compliance Management",
        "Observeri Compliance Management maintains regulations, builds AI compliance registers, runs self-assessments, and tracks submissions.",
        "/compliance_management.webp",
        "/products/compliance-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Compliance Management" }]),
    ],
  },
  "/products/information-asset-management": {
    title: "Information Asset Management & Risk Scoring | Observeri",
    description:
      "Observeri Information Asset Management ingests assets, applies live AI risk scores and control effectiveness, and maps a unified exposure view.",
    keywords:
      "information asset management, asset inventory software, AI asset risk scoring, control effectiveness per asset, unified exposure view, CIA triad asset profiling, asset register GRC, CMDB integration, live asset risk scores",
    ogImage: "/information_asset_management.webp",
    schemas: [
      productSchema(
        "Observeri Information Asset Management",
        "Observeri Information Asset Management ingests assets, applies live AI risk scores and control effectiveness, and maps a unified exposure view.",
        "/information_asset_management.webp",
        "/products/information-asset-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Information Asset Management" }]),
    ],
  },
  "/products/human-risk-management": {
    title: "Human Risk Management Software | HRE Scoring | Observeri",
    description:
      "Observeri Human Risk Management scans privileged identities, calculates HRE scores, and quantifies financial exposure with automated controls.",
    keywords:
      "human risk management, privileged identity monitoring, HRE scoring, insider threat detection, identity risk scoring, privileged access review, human cyber risk model, automated access controls, financial exposure people risk",
    ogImage: "/human_risk_management.webp",
    schemas: [
      productSchema(
        "Observeri Human Risk Management",
        "Observeri Human Risk Management scans privileged identities, calculates HRE scores, and quantifies financial exposure with automated controls.",
        "/human_risk_management.webp",
        "/products/human-risk-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Human Risk Management" }]),
    ],
  },
  "/products/data-privacy-protection": {
    title: "Data Privacy & Protection Software | PII | Observeri",
    description:
      "Observeri Data Privacy & Protection detects PII, discovers sensitive data and secrets, and scores exposure with NER-based classification.",
    keywords:
      "data privacy software, PII detection, sensitive data discovery, secret scanning, credential scanning, NER data identification, data exposure scoring, data classification, GDPR data discovery, PDPL compliance",
    ogImage: "/data-privacy-dashboard.webp",
    schemas: [
      productSchema(
        "Observeri Data Privacy & Protection",
        "Observeri Data Privacy & Protection detects PII, discovers sensitive data and secrets, and scores exposure with NER-based classification.",
        "/data-privacy-dashboard.webp",
        "/products/data-privacy-protection",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Data Privacy & Protection" }]),
    ],
  },
  "/products/data-loss-prevention": {
    title: "Data Loss Prevention and Shadow Channels | Observeri",
    description:
      "Observeri DLP approves email, cloud drive, and AI tools, catches shadow mediums, and turns a blocked or audited violation into a risk incident.",
    keywords:
      "data loss prevention, shadow mediums, approved email providers, cloud drive DLP, AI model controls, infotype policies, violation to risk incident",
    ogImage: "/data-loss-prevention.webp",
    schemas: [
      productSchema(
        "Observeri Data Loss Prevention",
        "Observeri DLP approves email, cloud drive, and AI tools, catches shadow mediums, and turns a blocked or audited violation into a risk incident.",
        "/data-loss-prevention.webp",
        "/products/data-loss-prevention",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Data Loss Prevention" }]),
    ],
  },
  "/products/centralised-controls-management": {
    title: "Centralised Controls Management and Testing | Observeri",
    description:
      "Observeri keeps 3,000+ controls, approves applicability, tests with evidence, rates effectiveness, and updates mapped risk, compliance, and incidents.",
    keywords:
      "centralised controls management, control library, control applicability, control testing workflow, control evidence, control effectiveness, mapped risk compliance incidents",
    ogImage: "/centralised-controls.webp",
    schemas: [
      productSchema(
        "Observeri Centralised Controls Management",
        "Observeri keeps 3,000+ controls, approves applicability, tests with evidence, rates effectiveness, and updates mapped risk, compliance, and incidents.",
        "/centralised-controls.webp",
        "/products/centralised-controls-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Centralised Controls Management" }]),
    ],
  },
  "/products/automated-compliance": {
    title: "Automated Compliance for On-Prem and Cloud | Observeri",
    description:
      "Observeri on-prem agent for Windows and Linux, virtual connector for Azure, GCP, AWS, and Oracle Cloud, scheduled checks, and a real-time risk view.",
    keywords:
      "automated compliance, on-prem compliance agent, Windows Linux compliance, virtual connector, Azure GCP AWS Oracle Cloud, posture management, real-time risk view",
    ogImage: "/automated-compliance.webp",
    schemas: [
      productSchema(
        "Observeri Automated Compliance",
        "Observeri on-prem agent for Windows and Linux, virtual connector for Azure, GCP, AWS, and Oracle Cloud, scheduled checks, and a real-time risk view.",
        "/automated-compliance.webp",
        "/products/automated-compliance",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Automated Compliance" }]),
    ],
  },
  "/products/business-continuity-management": {
    title: "Business Continuity, BIA, and Crisis Rooms | Observeri",
    description:
      "Observeri keeps a BIA register, ties DR and BCP plans to it, runs a crisis war room for live decisions, and simulates the whole BCP and DR exercise.",
    keywords:
      "business continuity management, BIA register, disaster recovery plan, BCP plan, crisis management, war room, BCP exercise, DR exercise simulation",
    ogImage: "/business-continuity.webp",
    schemas: [
      productSchema(
        "Observeri Business Continuity Management",
        "Observeri keeps a BIA register, ties DR and BCP plans to it, runs a crisis war room for live decisions, and simulates the whole BCP and DR exercise.",
        "/business-continuity.webp",
        "/products/business-continuity-management",
        "SecurityApplication",
      ),
      breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Products", item: "/features" }, { name: "Business Continuity Management" }]),
    ],
  },
  "/consultancy-service": {
    title: "GRC & Cybersecurity Consultancy | Observeri Advisory",
    description:
      "Observeri consultancy delivers security architecture, incident response readiness, GRC integration, red teaming, forensics, and maturity assessments.",
    keywords: "GRC consultancy, cybersecurity advisory, incident response consulting, security architecture UAE",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Consultancy" }]),
  },
  "/partners": {
    title: "Partner Program | Observeri GRC & Cybersecurity Partners",
    description:
      "Join the Observeri partner ecosystem of resellers, auditors, and technology partners delivering AI-powered GRC to enterprises globally.",
    keywords: "Observeri partners, GRC partner program, cybersecurity reseller, audit partners",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Partners" }]),
  },
  "/solutions": {
    title: "Industry GRC Solutions | Enterprises, SMEs, and Startups",
    description:
      "Industry-specific GRC solutions for banking, fintech, healthcare, government, energy, and technology—tailored compliance, risk, and security workflows.",
    keywords: "industry GRC solutions, banking GRC, fintech compliance, healthcare GRC, energy cybersecurity",
    schemas: breadcrumbSchema([{ name: "Home", item: "/" }, { name: "Industry Solutions" }]),
  },
  "/solutions/banking-financial-services": {
    title: "Banking & Financial Services GRC Solution | Observeri",
    description:
      "Observeri delivers AI-powered GRC for banks and fintechs, automating CBUAE, DFSA, AML/CFT, SOX, and PCI DSS obligations and risk remediation.",
    keywords: "banking GRC software, financial services compliance, fintech risk management, CBUAE DFSA AML compliance",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Banking & Financial Services" },
    ]),
  },
  "/solutions/healthcare-life-sciences": {
    title: "Healthcare & Life Sciences GRC Solution | Observeri",
    description:
      "Observeri healthcare GRC secures IoMT ecosystems, protects PHI, and automates HIPAA and privacy compliance with AI risk assessments.",
    keywords: "healthcare GRC software, HIPAA compliance, IoMT security, PHI protection, life sciences risk management",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Healthcare & Life Sciences" },
    ]),
  },
  "/solutions/government-public-sector": {
    title: "Government & Public Sector GRC Solution | Observeri",
    description:
      "Observeri public-sector GRC unifies governance, sovereign data protection, and automated NESA assurance with audit-ready risk workflows.",
    keywords: "government GRC platform, public sector risk management, NESA compliance, sovereign data protection",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Government & Public Sector" },
    ]),
  },
  "/solutions/technology-saas": {
    title: "Technology & SaaS GRC & Compliance Solution | Observeri",
    description:
      "Observeri GRC helps SaaS and technology teams ship fast while automating SOC 2, vendor risk, API visibility, and secure-engineering controls.",
    keywords: "SaaS GRC platform, SOC 2 automation, technology compliance, vendor risk management, DevSecOps GRC",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Technology & SaaS" },
    ]),
  },
  "/solutions/retail-ecommerce": {
    title: "Retail & E-commerce GRC & PCI DSS Solution | Observeri",
    description:
      "Observeri retail GRC protects transaction-heavy environments and customer data, automating PCI DSS compliance, vendor risk, and fraud reduction.",
    keywords: "retail GRC software, e-commerce compliance, PCI DSS compliance, customer data protection, fraud risk",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Retail & E-commerce" },
    ]),
  },
  "/solutions/energy-utilities": {
    title: "Energy & Utilities GRC & OT Security Solution | Observeri",
    description:
      "Observeri GRC secures critical infrastructure with OT-aware risk intelligence and compliance automation for NERC readiness and continuity.",
    keywords: "energy GRC software, utilities cybersecurity, OT security, critical infrastructure risk, NERC compliance",
    schemas: breadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Industry Solutions", item: "/solutions" },
      { name: "Energy & Utilities" },
    ]),
  },
  "/aws-marketplace/register": {
    title: "Set Up Observeri | AWS Marketplace Registration",
    description: "Create the first Observeri admin account for your AWS Marketplace contract and confirm entitlement before access.",
    robots: "noindex, nofollow",
  },
  "/aws-marketplace/login": {
    title: "Observeri Admin Login | AWS Marketplace Customers",
    description: "Sign in to the Observeri admin console for your AWS Marketplace subscription and review contract entitlements.",
    robots: "noindex, nofollow",
  },
  "/aws-marketplace/admin": {
    title: "Observeri Admin Console | AWS Marketplace Account",
    description: "Review your Observeri organization, AWS account, and live Marketplace entitlements from the admin console.",
    robots: "noindex, nofollow",
  },
  "/aws-marketplace/verify": {
    title: "Confirm Your Observeri Admin Email",
    description: "Confirm the admin email for your Observeri account created from an AWS Marketplace subscription.",
    robots: "noindex, nofollow",
  },
  "/aws-marketplace/confirm": {
    title: "Check Your Email | Observeri Registration",
    description: "A confirmation email is on its way so you can activate the Observeri admin account tied to AWS Marketplace.",
    robots: "noindex, nofollow",
  },
  "/aws-marketplace/subscribe": {
    title: "Subscribe on AWS Marketplace | Observeri",
    description: "Observeri access starts with an AWS Marketplace contract. Subscribe there, then complete registration when AWS redirects you.",
    robots: "noindex, nofollow",
  },
};

// The audit copy is also used by the rendered H1, overview, and FAQ sections.
for (const [path, approved] of Object.entries(auditSeo)) {
  const seo = pageSeoByPath[path];
  seo.title = approved.title;
  seo.description = approved.description;
  seo.keywords = approved.keyword;
  const schemas = (Array.isArray(seo.schemas) ? seo.schemas : seo.schemas ? [seo.schemas] : [])
    .filter(schema => schema["@type"] !== "FAQPage")
    .map(schema => schema["@type"] === "SoftwareApplication" ? { ...schema, description: approved.description } : schema);
  seo.schemas = [...schemas, faqPageSchema(approved.faqs)];
}

export const getPageSeoForPath = (pathname: string): PageSeoConfig => {
  pathname = pathname.replace(/\/+$/, "") || "/";
  const exact = pageSeoByPath[pathname];
  if (exact) {
    return exact;
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = (blogPosts as BlogPostData[]).find((candidate) => candidate.slug === blogMatch[1]);
    if (post) {
      return {
        title: `${post.title.replace(/<[^>]*>/g, "")} | Observeri`,
        description: post.excerpt.slice(0, 158),
        ogImage: post.featured_image,
        schemas: blogPostingSchema({ ...post, link: `/blog/${post.slug}` }),
      };
    }
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

  return {
    title: "Page Not Found | Observeri",
    description: "The page you requested could not be found. Explore Observeri GRC modules and industry solutions.",
    robots: "noindex, follow",
  };
};
