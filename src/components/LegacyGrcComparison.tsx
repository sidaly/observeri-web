import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const comparisons = [
  {
    legacy: "Periodic assessments",
    observeri: "Continuous risk intelligence",
    detail: "Risk changes as new asset, control, vulnerability, and incident signals arrive.",
  },
  {
    legacy: "Red, amber, and green heat maps",
    observeri: "Quantified financial exposure",
    detail: "Expected loss gives executives a business measure for appetite and investment decisions.",
  },
  {
    legacy: "Disconnected registers",
    observeri: "One enterprise risk view",
    detail: "Cyber, operational, financial, compliance, and AI risk keep their context and inform one index.",
  },
  {
    legacy: "Manual coordination",
    observeri: "Automated evidence and remediation",
    detail: "Mapped records move together so owners spend less time reconciling updates across tools.",
  },
];

export const LegacyGrcComparison = () => (
  <section className="border-b border-border/40 bg-card/20 py-20" aria-labelledby="observeri-versus-legacy-grc">
    <div className="container mx-auto max-w-6xl px-6">
      <FadeUp>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Why Observeri</p>
        <h2 id="observeri-versus-legacy-grc" className="mt-3 max-w-3xl text-3xl font-display font-bold md:text-4xl">
          Move from recording risk to acting on it.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Replace retrospective compliance administration with a live view of exposure, ownership, and action.
        </p>
      </FadeUp>

      <div className="mt-10 hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-5 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:grid">
        <span>Legacy GRC</span>
        <span aria-hidden="true" />
        <span>Observeri</span>
      </div>

      <StaggerContainer className="mt-4 space-y-4" staggerDelay={0.07}>
        {comparisons.map((comparison) => (
          <StaggerItem key={comparison.legacy}>
            <article className="grid gap-4 rounded-2xl border border-border/60 bg-background p-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6 md:p-6">
              <div className="flex items-start gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground md:hidden">Legacy GRC</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{comparison.legacy}</h3>
                </div>
              </div>

              <ArrowRight className="hidden h-5 w-5 text-primary md:block" aria-hidden="true" />

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary md:hidden">Observeri</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-primary">{comparison.observeri}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{comparison.detail}</p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
