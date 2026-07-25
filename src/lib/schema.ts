import type { BlogPostData } from "@/types/wordpress";

export type JsonLdSchema = Record<string, unknown> | Record<string, unknown>[];

const SITE_URL = "https://observeri.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Observeri Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/grc-sphere-full-logo.png`,
  sameAs: [
    "https://twitter.com/GRCSphere",
    "https://www.linkedin.com/company/observeri",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-50-658-3714",
    contactType: "sales",
    email: "connect@observeri.com",
    areaServed: "AE",
    availableLanguage: "English",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Observeri GRC",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    description: "Free trial available. Enterprise pricing on request.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
  description:
    "AI-powered cybersecurity GRC platform for governance, risk, compliance, and continuous threat exposure management.",
  url: SITE_URL,
  brand: {
    "@type": "Organization",
    name: "Observeri Technologies",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Observeri GRC",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(items: { name: string; item?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item ? `${SITE_URL}${item.item}` : undefined,
    })),
  };
}

export function faqPageSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: BlogPostData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160),
    url: post.link,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Observeri Technologies",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Observeri Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/grc-sphere-full-logo.png`,
      },
    },
    image: post.featured_image ? { "@type": "ImageObject", url: post.featured_image } : undefined,
  };
}

export function productSchema(
  name: string,
  description: string,
  image: string,
  url: string,
  category: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    brand: {
      "@type": "Brand",
      name: "Observeri",
    },
    category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}${url}`,
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      description: "Free trial available. Enterprise pricing on request.",
    },
  };
}
