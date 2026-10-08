import type { BlogPostData } from "@/types/wordpress";

export type JsonLdSchema = Record<string, unknown> | Record<string, unknown>[];

import { SITE_URL } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Observeri Technologies",
  url: SITE_URL,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  logo: `${SITE_URL}/grc-sphere-full-logo.png`,
  sameAs: [
    "https://x.com/observeritech",
    "https://www.linkedin.com/company/observeri-technologies",
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

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Observeri Technologies",
  alternateName: "Observeri",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
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
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}${url}#software`,
    name,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    applicationCategory: category,
    operatingSystem: "Web browser",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Observeri Technologies",
      url: SITE_URL,
    },
    // Pricing and reviews are omitted until verified, visible data is available.
  };
}
