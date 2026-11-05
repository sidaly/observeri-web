import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const standards = [
  { name: "PCI DSS", scope: "Payments", score: 92, controls: "268/294", gaps: 2 },
  { name: "ISO 27001", scope: "Information security", score: 87, controls: "79/93", gaps: 3 },
  { name: "CBUAE", scope: "UAE central bank", score: 78, controls: "41/53", gaps: 5 },
  { name: "EU GDPR", scope: "European Union", score: 90, controls: "52/59", gaps: 1 },
  { name: "DORA", scope: "European Union", score: 76, controls: "46/62", gaps: 6 },
  { name: "EU NIS2", scope: "European Union", score: 81, controls: "44/54", gaps: 4 },
  { name: "SAMA", scope: "KSA", score: 84, controls: "97/117", gaps: 3 },
  { name: "NESA", scope: "UAE", score: 82, controls: "64/80", gaps: 3 },
];

const filings = [
  { name: "CBUAE outsourcing return", due: "30 Apr", status: "Draft" },
  { name: "DORA ICT register", due: "12 May", status: "Due" },
  { name: "PCI DSS SAQ", due: "18 Jun", status: "Scheduled" },
];

const average = Math.round(standards.reduce((sum, item) => sum + item.score, 0) / standards.length);
const openGaps = standards.reduce((sum, item) => sum + item.gaps, 0);

const tone = (score: number) => {
  if (score >= 85) return { label: "On track", bar: "#148454", text: "#148454", chip: "bg-[#eef6f1] text-[#148454]" };
  if (score >= 75) return { label: "Gaps", bar: "#e36b00", text: "#e36b00", chip: "bg-[#fff4e8] text-[#e36b00]" };
  return { label: "Behind", bar: "#d42516", text: "#d42516", chip: "bg-[#fdeceb] text-[#d42516]" };
};

const CountUp = ({ to, run }: { to: number; run: boolean }) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.2, ease: "easeOut", onUpdate: (next) => setValue(Math.round(next)) });
    return () => controls.stop();
  }, [to, run, reduce]);
  return <>{value}</>;
};

export const ComplianceDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const reduce = useReducedMotion();
  const run = inView || !!reduce;

  return (
    <div
      ref={ref}
      className="min-w-0 rounded-[1.75rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm md:p-6"
      aria-label="Sample compliance standards dashboard"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189c60] opacity-70" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#189c60]" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#148454]">Compliance</p>
          </div>
          <p className="mt-1 font-display text-xl font-semibold">Standards dashboard</p>
        </div>
        <span className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Average", value: average, suffix: "%" },
          { label: "Standards", value: standards.length, suffix: "" },
          { label: "Open gaps", value: openGaps, suffix: "" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-center">
            <p className="font-display text-lg font-bold">
              <CountUp to={item.value} run={run} />
              {item.suffix}
            </p>
            <p className="text-[10px] uppercase tracking-wide text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Standards in scope</p>
        {standards.map((item, index) => {
          const status = tone(item.score);
          return (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-[11px] text-slate-500">
                    {item.scope} · {item.controls} · {item.gaps} gap{item.gaps === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="font-display text-sm font-bold" style={{ color: status.text }}>
                    {item.score}%
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.chip}`}>{status.label}</span>
                </div>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: status.bar }}
                  initial={{ width: reduce ? `${item.score}%` : "0%" }}
                  animate={{ width: run ? `${item.score}%` : "0%" }}
                  transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : index * 0.06, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Submissions due</p>
        <ul className="mt-3 space-y-2.5">
          {filings.map((item, index) => (
            <motion.li
              key={item.name}
              className="flex items-center justify-between gap-3 text-sm"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: run ? 1 : 0, y: run ? 0 : 8 }}
              transition={{ delay: reduce ? 0 : 0.4 + index * 0.1, duration: 0.35 }}
            >
              <span className="font-semibold">{item.name}</span>
              <span className="shrink-0 text-xs text-slate-500">
                {item.due} · <span className="font-semibold text-[#e36b00]">{item.status}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
