import { Link, useLocation } from "react-router-dom";
import { productPages } from "@/data/products";

const clusters: Record<string, string[]> = {
  "external-attack-surface-management": ["exposure-management", "vulnerability-operations", "information-asset-management"],
  "cyber-risk-management": ["operational-risk", "ai-risk", "compliance-management"],
  "operational-risk": ["business-continuity-management", "financial-risk", "cyber-risk-management"],
  "business-continuity-management": ["operational-risk", "enterprise-risk", "cyber-risk-management"],
  "financial-risk": ["enterprise-risk", "operational-risk", "cyber-risk-management"],
  "enterprise-risk": ["financial-risk", "operational-risk", "cyber-risk-management"],
  "ai-governance": ["ai-risk", "ai-data-monitoring", "compliance-management"],
  "ai-risk": ["ai-governance", "ai-data-monitoring", "cyber-risk-management"],
  "ai-data-monitoring": ["ai-governance", "ai-risk", "data-privacy-protection"],
  "banking-financial-services": ["cyber-risk-management", "compliance-management", "third-party-risk"],
  "ai-risk-operations-center": ["cyber-risk-management", "exposure-management", "compliance-management"],
  "compliance-management": ["automated-compliance", "centralised-controls-management", "security-governance"],
  "centralised-controls-management": ["compliance-management", "automated-compliance", "cyber-risk-management"],
  "automated-compliance": ["compliance-management", "centralised-controls-management", "cyber-risk-management"],
  "third-party-risk": ["cyber-risk-management", "compliance-management", "external-attack-surface-management"],
  "vulnerability-operations": ["exposure-management", "external-attack-surface-management", "cyber-risk-management"],
  "exposure-management": ["external-attack-surface-management", "vulnerability-operations", "cyber-risk-management"],
  "audit-management": ["compliance-management", "security-governance", "cyber-risk-management"],
  "security-governance": ["budget-management", "compliance-management", "cyber-risk-management"],
  "budget-management": ["security-governance", "cyber-risk-management", "compliance-management"],
  "information-asset-management": ["data-privacy-protection", "human-risk-management", "ai-risk-operations-center"],
  "human-risk-management": ["information-asset-management", "security-governance", "cyber-risk-management"],
  "data-privacy-protection": ["data-loss-prevention", "information-asset-management", "compliance-management"],
  "data-loss-prevention": ["data-privacy-protection", "ai-data-monitoring", "cyber-risk-management"],
};

export function RelatedProducts() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  const slug = pathname.replace(/\/+$/, "").split("/").pop() || "";
  const slugs = clusters[slug];
  if (!slugs) return null;
  const products = productPages.filter((product) => slugs.includes(product.slug));
  return (
    <section className="border-t border-border/30 py-16" aria-labelledby="related-products-heading">
      <div className="container mx-auto px-6">
        <h2 id="related-products-heading" className="mb-8 text-3xl font-display font-bold">
          Related products
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} to={product.href} className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary">
              <h3 className="text-lg font-semibold text-primary">{product.label}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
