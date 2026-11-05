import {
  Blocks,
  Bot,
  Bug,
  Cloud,
  EyeOff,
  Globe,
  Handshake,
  Map,
  Network,
  Radar,
  ScanSearch,
  Share2,
  ShieldAlert,
  Sparkles,
  Target,
  TriangleAlert,
  Webhook,
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

export type EasmFlowStage = {
  title: string;
  detail: string;
  rows: { name: string; note: string; status: string }[];
};

export const easmHero = {
  eyebrow: "External Attack Surface Management",
  headline: "Know every edge of your exposure — before attackers do.",
  subheadline:
    "Observeri EASM continuously discovers, scans, and prioritizes every public-facing asset across your digital footprint—domains, subdomains, cloud services, open ports, shadow IT, and dark-web signals—so GRC and security teams close exposure with evidence, not guesswork.",
  heroPills: [
    { label: "Hosts and their vulnerabilities", icon: Bug },
    { label: "Penetration testing", icon: ScanSearch },
    { label: "Shadow IT findings", icon: EyeOff },
    { label: "Attack simulation", icon: Map },
    { label: "External API discovery", icon: Webhook },
    { label: "Third-party discovery", icon: Handshake },
    { label: "Dark web monitoring", icon: Radar },
    { label: "Social media monitoring", icon: Share2 },
    { label: "Blockchain security", icon: Blocks },
    { label: "AI ethical hacker", icon: Bot },
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
    "EASM is Observeri's outside-in visibility layer. It finds hosts and the vulnerabilities on them, runs penetration testing and attack simulation, and catches shadow IT. It also discovers external APIs and third parties, monitors the dark web and public social channels, reviews blockchain assets, and uses an AI ethical hacker to show which of your hosts are breachable.",
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
      "Run external penetration testing for misconfigurations, TLS and DNS hygiene, and exposed cloud storage, and keep each result on the host.",
    icon: Cloud,
  },
  {
    title: "Blockchain security",
    description:
      "Review blockchain assets discovered from internet-facing hosts, and keep contract and wallet findings on the same external record.",
    icon: Blocks,
  },
  {
    title: "Dark web monitoring",
    description:
      "Watch dark-web sources for mentions of the organisation, its domains, and exposed data, and open each signal as a finding.",
    icon: Radar,
  },
  {
    title: "Social media monitoring",
    description:
      "Watch public social posts that mention the organisation, its domains, or a host, and keep those mentions with the external record.",
    icon: Share2,
  },
  {
    title: "Third-party discovery",
    description:
      "Find vendors and services sitting on the external footprint that the inventory did not already list.",
    icon: Handshake,
  },
  {
    title: "External API discovery",
    description:
      "Find public APIs and API catalogues on internet-facing hosts, and attach each one to the host that exposes it.",
    icon: Webhook,
  },
  {
    title: "AI ethical hacker",
    description:
      "An AI ethical hacker tests the organisation's own hosts and records which ones it can show are breachable. The result is a finding for the team to close.",
    icon: Bot,
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
    signals: ["Shadow IT", "Penetration testing", "Attack simulation", "Breachable hosts"],
  },
  {
    step: 4,
    title: "Prioritize",
    subtitle: "Focus on business impact",
    description:
      "AI risk scores and exploitability context rank findings so teams remediate critical external exposure before the noise.",
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
    title: "Blockchain security",
    description:
      "Review contracts and wallets discovered from live hosts, and queue the gaps beside the host that exposed them.",
    icon: Blocks,
  },
  {
    title: "Dark web and social monitoring",
    description:
      "Dark-web signals and public social mentions of the organisation sit on the external record with the host they relate to.",
    icon: Share2,
  },
  {
    title: "APIs and third parties",
    description:
      "External APIs and third-party services discovered on the footprint are listed against the host, not left in a separate scan.",
    icon: Webhook,
  },
  {
    title: "AI ethical hacker",
    description:
      "The ethical hacker demonstrates which of your hosts are breachable and records that result. It does not publish the method.",
    icon: Bot,
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
  "Penetration testing, with each result kept on the host",
  "Attack simulation from a public host through to business impact",
  "Blockchain security review of contracts and wallets found on hosts",
  "Dark web monitoring for organisation, domain, and data mentions",
  "Social media monitoring of public posts about the organisation",
  "Third-party discovery of vendors on the external footprint",
  "External API discovery, attached to the host that exposes the API",
  "AI ethical hacker that shows which of your hosts are breachable",
  "Cloud misconfiguration posture checks",
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

export const easmFlowStages: EasmFlowStage[] = [
  {
    title: "Hosts",
    detail: "Internet-facing hosts are discovered and kept on one external record.",
    rows: [
      { name: "edge.example", note: "Port 443", status: "Live" },
      { name: "api.example", note: "Port 443", status: "Live" },
      { name: "files.example", note: "Port 8443", status: "Review" },
    ],
  },
  {
    title: "Vulnerabilities",
    detail: "Each host shows the findings on it, with a severity and no separate queue.",
    rows: [
      { name: "edge.example", note: "3 findings", status: "High" },
      { name: "api.example", note: "1 finding", status: "Medium" },
      { name: "files.example", note: "2 findings", status: "High" },
    ],
  },
  {
    title: "Penetration testing",
    detail: "External testing runs against the host and the result stays on that host.",
    rows: [
      { name: "edge.example", note: "External test", status: "Finding" },
      { name: "api.example", note: "External test", status: "Clear" },
      { name: "files.example", note: "External test", status: "Finding" },
    ],
  },
  {
    title: "Shadow IT",
    detail: "Unapproved hosts and services are flagged as shadow IT.",
    rows: [
      { name: "dev.example", note: "Unapproved host", status: "Shadow" },
      { name: "notes.example", note: "Unapproved app", status: "Shadow" },
      { name: "lab.example", note: "Unapproved service", status: "Shadow" },
    ],
  },
  {
    title: "Attack simulation",
    detail: "A simulation records the path from a public host to business impact.",
    rows: [
      { name: "edge.example", note: "Entry point", status: "Simulated" },
      { name: "Customer service", note: "Reached", status: "Simulated" },
      { name: "Data exposure", note: "Business impact", status: "Shown" },
    ],
  },
  {
    title: "External APIs",
    detail: "Public APIs and catalogues are discovered and attached to the host.",
    rows: [
      { name: "api.example", note: "Public API", status: "Discovered" },
      { name: "partner.example", note: "External API", status: "Discovered" },
      { name: "docs.example", note: "API catalogue", status: "Discovered" },
    ],
  },
  {
    title: "Third parties",
    detail: "Vendors found on the footprint are listed against the host that uses them.",
    rows: [
      { name: "Cloud mail", note: "On edge.example", status: "Discovered" },
      { name: "File share", note: "On files.example", status: "Discovered" },
      { name: "Support desk", note: "On api.example", status: "Discovered" },
    ],
  },
  {
    title: "Dark web",
    detail: "Dark-web mentions of the organisation are opened as findings. No secret is copied into the record.",
    rows: [
      { name: "Domain mention", note: "Dark web", status: "Review" },
      { name: "Credential mention", note: "Dark web", status: "Review" },
      { name: "Data listing", note: "Dark web", status: "Review" },
    ],
  },
  {
    title: "Social media",
    detail: "Public posts that mention the organisation, a domain, or a host are monitored.",
    rows: [
      { name: "Public post", note: "Company domain", status: "Open" },
      { name: "Public post", note: "Brand name", status: "Open" },
      { name: "Public post", note: "Host name", status: "Review" },
    ],
  },
  {
    title: "Blockchain",
    detail: "Contracts and wallets discovered from hosts are reviewed for security gaps.",
    rows: [
      { name: "Contract 0x4f…a91", note: "Public chain", status: "Review" },
      { name: "Contract 0x91…c20", note: "Public chain", status: "Clear" },
      { name: "Wallet 0xaa…11", note: "Linked host", status: "Review" },
    ],
  },
  {
    title: "AI ethical hacker",
    detail: "The ethical hacker shows which of your hosts are breachable and records the result.",
    rows: [
      { name: "edge.example", note: "Demonstration", status: "Breachable" },
      { name: "api.example", note: "Demonstration", status: "Withstood" },
      { name: "files.example", note: "Demonstration", status: "Breachable" },
    ],
  },
];
