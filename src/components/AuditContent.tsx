import content from "@/data/auditSeo.json";

export type AuditPath = keyof typeof content;

export function AuditOverview({ path }: { path: AuditPath }) {
  const page = content[path];
  return (
    <section className="border-b border-border/30 py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-display font-bold md:text-3xl">{page.keyword} for regulated enterprises</h2>
        {page.body.slice(1).map((paragraph) => (
          <p key={paragraph} className="mt-6 text-lg leading-8 text-muted-foreground">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function PageFaq({ path }: { path: AuditPath }) {
  return (
    <section className="py-20" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 id="faq-heading" className="mb-8 text-3xl font-display font-bold">Frequently asked questions</h2>
        <div className="space-y-4">
          {content[path].faqs.map(({ question, answer }) => (
            <details key={question} className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <summary className="cursor-pointer text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{question}</summary>
              <p className="mt-4 leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
