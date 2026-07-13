import {
  Bug,
  Cloud,
  EyeOff,
  Globe,
  Map,
  Network,
  Radar,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  Target,
  TriangleAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type EasmWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type EasmCapabilityCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EasmBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EasmFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EasmSlide = {
  src: string;
  label: string;
  alt: string;
};

export const easmHero = {
  eyebrow: "External Attack Surface Management",
  headline: "Know every edge of your exposure — before attackers do.",
  subheadline:
    "Observeri EASM continuously discovers, scans, and prioritizes every public-facing asset across your digital footprint—domains, subdomains, cloud services, open ports, shadow IT, and dark-web signals—so GRC and security teams close exposure with evidence, not guesswork.",
  heroPills: [
    { label: "Domain & subdomain discovery", icon: ScanSearch },
    { label: "Continuous vulnerability scanning", icon: Bug },
    { label: "Shadow IT detection", icon: EyeOff },
    { label: "Attack path analysis", icon: Map },
    { label: "Cloud security posture", icon: Cloud },
  ],
  outcomes: [
    { value: "24/7", label: "External discovery" },
    { value: "AI", label: "Risk prioritization" },
    { value: "GRC", label: "Linked remediation" },
  ],
};

export const easmProblem = {
  eyebrow: "Why it matters",
  title: "Your attack surface doesn't stop at the firewall",
  painPoints: [
    {
      title: "Unknown internet-facing assets",
      description:
        "Forgotten subdomains, shadow cloud instances, and unsanctioned SaaS expand faster than inventories can track—creating blind spots attackers find first.",
      icon: Globe,
    },
    {
      title: "Fragmented external scanning",
      description:
        "Port scans, cert transparency, and one-off pentests live in different tools with no shared risk score or path to GRC remediation ownership.",
      icon: Network,
    },
    {
      title: "Shadow IT goes unmanaged",
      description:
        "Dev/test instances, exposed Swagger endpoints, and abandoned CMS installs remain reachable without WAF, ownership, or SLA.",
      icon: EyeOff,
    },
    {
      title: "No bridge to GRC workflows",
      description:
        "External findings rarely update the risk register, vulnerability operations queue, or board-level exposure metrics in time to matter.",
      icon: Workflow,
    },
  ],
};

export const easmValueProp = {
  eyebrow: "What it is",
  title: "Continuous external attack surface management for Observeri GRC",
  description:
    "EASM is Observeri's outside-in visibility layer. It enumerates your public footprint, enriches assets with ASN/CDN/WAF intelligence, detects shadow IT, maps attack paths, runs web and smart-contract checks, and feeds prioritized findings into Vulnerability Operations and the AI Risk Operations Center.",
  pillars: [
    { label: "Discover continuously", icon: Radar },
    { label: "Prioritize with AI", icon: Sparkles },
    { label: "Remediate in GRC", icon: Target },
  ],
};

export const easmCapabilities: EasmCapabilityCard[] = [
  {
    title: "Domain & subdomain discovery",
    description:
      "Continuously enumerate domains, subdomains, IPs, and DNS records tied to your organization—auto-updating as the footprint expands.",
    icon: ScanSearch,
  },
  {
    title: "Hosts, ports & services",
    description:
      "Inventory live and historical hosts with open ports, protocols, encryption status, and risk badges for plaintext exposures.",
    icon: Network,
  },
  {
    title: "Intelligence enrichment",
    description:
      "Enrich assets with ASN, CDN, WAF, geolocation, and RDAP context so teams know who hosts what—and where exposure concentrates.",
    icon: Globe,
  },
  {
    title: "Shadow IT detection",
    description:
      "Flag rogue subdomains, public dev/test instances, and exposed developer tooling such as Swagger/OpenAPI on internet-facing hosts.",
    icon: EyeOff,
  },
  {
    title: "Attack path analysis",
    description:
      "Map chained exploit paths from public entry points through pivot stages to business impact—so teams fix the routes that matter most.",
    icon: Map,
  },
  {
    title: "Web pentest & cloud posture",
    description:
      "Run credential-less external checks for sensitive paths, misconfigurations, TLS/DNS hygiene, and exposed cloud storage without cloud keys.",
    icon: Cloud,
  },
];

export const easmWorkflow: EasmWorkflowStep[] = [
  {
    step: 1,
    title: "Discover",
    subtitle: "Map the external footprint",
    description:
      "Seed domains and continuously discover hosts, certificates, ports, technologies, and cloud-facing services across your digital estate.",
    icon: ScanSearch,
    signals: ["Subdomain enumeration", "Cert transparency", "Port & service fingerprinting", "Tech stack detection"],
  },
  {
    step: 2,
    title: "Enrich",
    subtitle: "Add network and threat context",
    description:
      "Attach ASN, CDN/WAF, geography, and intelligence signals—including dark-web and leak monitoring—so every asset has operational context.",
    icon: Globe,
    signals: ["ASN & CDN inventory", "WAF detection", "Leak monitor", "Risk scoring"],
  },
  {
    step: 3,
    title: "Expose risk",
    subtitle: "Find what attackers can exploit",
    description:
      "Surface shadow IT, attack paths, web application exposures, smart-contract findings, and cloud misconfigurations with severity and evidence.",
    icon: ShieldAlert,
    signals: ["Shadow IT findings", "Attack paths", "Web pentest queue", "Cloud posture"],
  },
  {
    step: 4,
    title: "Prioritize",
    subtitle: "Focus on business impact",
    description:
      "AI risk scores and exploitability context rank findings so teams remediate critical external exposure before low-noise noise.",
    icon: Sparkles,
    signals: ["AI risk score", "Severity filters", "Work queue", "Controls coverage"],
  },
  {
    step: 5,
    title: "Remediate",
    subtitle: "Close the loop in Observeri GRC",
    description:
      "Push findings into Vulnerability Operations and the risk register with ownership, SLAs, and evidence—updating enterprise exposure in real time.",
    icon: Target,
    signals: ["Send to Vuln Ops", "Risk register sync", "SLA tracking", "Board-ready metrics"],
  },
];

export const easmFeatures: EasmFeature[] = [
  {
    title: "Analytics dashboard",
    description:
      "Track domains monitored, completed scans, average risk, host growth, open ports, and critical/high counts across your EASM programme.",
    icon: Radar,
  },
  {
    title: "Asset graph",
    description:
      "Explore an animated network topology of discovered hosts, filter by risk tier, and inspect AI risk and control effectiveness per asset.",
    icon: Network,
  },
  {
    title: "Smart contract analysis",
    description:
      "Analyze blockchain program addresses discovered from live EASM hosts, with controls coverage and a findings work queue for gaps.",
    icon: Bug,
  },
  {
    title: "Export & integration",
    description:
      "Export hosts and findings, simulate attacks, and escalate into Vulnerability Operations without leaving the Observeri GRC workflow.",
    icon: Workflow,
  },
];

export const easmBenefits: EasmBenefit[] = [
  {
    title: "Eliminate external blind spots",
    description:
      "Replace static inventories with continuous discovery so new subdomains, ports, and cloud exposures appear in the programme—not in an incident ticket.",
    icon: ScanSearch,
  },
  {
    title: "Prioritize the real attack paths",
    description:
      "Move beyond raw CVE lists to path-aware and severity-aware queues that show how an attacker can progress from a public CMS to internal impact.",
    icon: Map,
  },
  {
    title: "Govern external risk like internal risk",
    description:
      "Feed EASM findings into the same GRC spine used for vulnerabilities, assets, and board reporting—so external exposure has owners and SLAs.",
    icon: Target,
  },
  {
    title: "Prove reduction over time",
    description:
      "Use risk-score trends and attack-surface growth charts to show whether discovery is expanding faster than remediation—or the other way around.",
    icon: TriangleAlert,
  },
];

export const easmOrgOutcomes = [
  {
    title: "For CISOs",
    description:
      "A live view of internet-facing risk, shadow IT, and critical external findings tied to enterprise risk reduction—not tool sprawl.",
  },
  {
    title: "For security operations",
    description:
      "One work queue for hosts, ports, pentest findings, attack paths, and cloud posture with evidence ready for remediation handoff.",
  },
  {
    title: "For GRC & compliance",
    description:
      "External exposure becomes auditable: discovered assets, prioritized issues, and closure evidence linked to Observeri GRC controls.",
  },
];

export const easmCapabilityList = [
  "Continuous domain, subdomain, host, and port discovery",
  "ASN, CDN, WAF, and geographic intelligence enrichment",
  "Shadow IT and rogue asset detection",
  "Attack path mapping from entry to impact",
  "Web application penetration testing work queues",
  "Smart contract security analysis with controls coverage",
  "Credential-less cloud misconfiguration posture checks",
  "Analytics for risk trends and attack-surface growth",
  "Asset graph with per-host AI risk scores",
  "Escalation into Vulnerability Operations and the risk register",
];

export const easmStats = [
  { value: "24/7", label: "Continuous discovery" },
  { value: "Outside-in", label: "No agent required" },
  { value: "AI", label: "Risk prioritization" },
  { value: "GRC", label: "Linked remediation" },
];

export const easmSlides: EasmSlide[] = [
  {
    src: "/easm/slides/easm-02.png",
    label: "Analytics dashboard",
    alt: "Observeri EASM analytics dashboard with risk trends and attack surface growth",
  },
  {
    src: "/easm/slides/easm-01.png",
    label: "Cloud posture",
    alt: "Observeri EASM cloud misconfiguration posture scan workspace",
  },
  {
    src: "/easm/slides/easm-03.png",
    label: "Hosts inventory",
    alt: "Observeri EASM hosts inventory with risk and CDN context",
  },
  {
    src: "/easm/slides/easm-04.png",
    label: "Ports inventory",
    alt: "Observeri EASM open ports inventory with protocol and encryption status",
  },
  {
    src: "/easm/slides/easm-05.png",
    label: "Intelligence",
    alt: "Observeri EASM domain and ASN intelligence enrichment view",
  },
  {
    src: "/easm/slides/easm-06.png",
    label: "Shadow IT",
    alt: "Observeri EASM shadow IT and rogue asset detection findings",
  },
  {
    src: "/easm/slides/easm-07.png",
    label: "Attack paths",
    alt: "Observeri EASM attack path mapping from public entry to impact",
  },
  {
    src: "/easm/slides/easm-08.png",
    label: "Web pentest",
    alt: "Observeri EASM web application penetration testing findings queue",
  },
  {
    src: "/easm/slides/easm-09.png",
    label: "Smart contracts",
    alt: "Observeri EASM smart contract security analysis and controls coverage",
  },
  {
    src: "/easm/slides/easm-10.png",
    label: "Asset graph",
    alt: "Observeri EASM asset graph topology with per-host risk detail",
  },
];
