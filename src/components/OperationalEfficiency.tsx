const cards = [
  {
    value: "60%",
    title: "Automation",
    detail: "Routine governance, risk, and compliance work is carried by the platform.",
  },
  {
    value: "90%",
    title: "Real-time decisions",
    detail: "The path from a new signal to an executive decision shortens from weeks to days.",
  },
  {
    value: "100%",
    title: "AI risk agents",
    detail: "When an agent updates a risk, every mapped record moves with it.",
  },
  {
    value: "100%",
    title: "Compliance self-assessment",
    detail: "An AI compliance agent assesses the controls in scope for the client.",
  },
  {
    value: "83%",
    title: "Lower expected loss",
    detail: "Modeled exposure falls once the quantified actions are in place.",
  },
  {
    value: "50%",
    title: "One shared record",
    detail: "Assets, threats, and compliance are read together, so the decision is faster.",
  },
];

export const OperationalEfficiency = () => (
  <section className="border-b border-border/40 bg-card/40 py-20" aria-labelledby="operational-efficiency">
    <div className="container mx-auto max-w-6xl px-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Operational efficiency</p>
      <h2 id="operational-efficiency" className="mt-3 max-w-3xl text-3xl font-display font-bold md:text-4xl">
        Less manual work. A shorter path to the decision.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-border bg-background p-6">
            <p className="font-display text-4xl font-bold text-primary">{card.value}</p>
            <h3 className="mt-4 font-display text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
