import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easmFlowStages } from "@/data/externalAttackSurfaceManagement";

const metrics = [
  { label: "Hosts", value: "128" },
  { label: "Findings", value: "46" },
  { label: "Shadow IT", value: "7" },
  { label: "Breachable", value: "2" },
];

const dashboardRows = [
  { name: "edge.example", note: "3 findings", status: "High" },
  { name: "api.example", note: "Public API", status: "Review" },
  { name: "files.example", note: "Third party", status: "Shadow" },
  { name: "dev.example", note: "Ethical hacker", status: "Breachable" },
];

const statusClass = (status: string) => {
  if (status === "Breachable" || status === "High" || status === "Shadow") return "bg-[#d42516] text-white";
  if (status === "Finding" || status === "Review" || status === "Open" || status === "Medium") return "bg-[#e36b00] text-white";
  if (status === "Clear" || status === "Withstood" || status === "Live") return "bg-[#148454] text-white";
  return "bg-[#0b78d4] text-white";
};

export const EasmDashboard = () => (
  <div className="rounded-[1.5rem] border border-border/40 bg-white p-5 text-slate-900 shadow-sm md:p-6">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#148454]">External attack surface</p>
        <p className="mt-1 font-display text-xl font-semibold">Exposure dashboard</p>
      </div>
      <span className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample</span>
    </div>
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
          <p className="mt-1 font-display text-2xl font-semibold">{metric.value}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
      <div className="grid grid-cols-[1.2fr_1fr_auto] gap-3 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        <span>Host</span>
        <span>Signal</span>
        <span>Status</span>
      </div>
      {dashboardRows.map((row) => (
        <div key={row.name} className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 border-t border-slate-100 px-4 py-3 text-sm">
          <span className="font-semibold">{row.name}</span>
          <span className="text-slate-500">{row.note}</span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass(row.status)}`}>{row.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export const EasmWorkflowAnimation = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const stage = easmFlowStages[active];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % easmFlowStages.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/40 bg-white text-slate-900 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-5 md:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#148454]">External workflow</p>
          <p className="mt-1 font-display text-2xl font-semibold">From a host to a shown result</p>
        </div>
        <span className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 p-4 lg:flex-col lg:flex-nowrap lg:border-b-0 lg:border-r lg:p-5">
          {easmFlowStages.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left ${
                  selected ? "bg-[#eef6f1]" : "hover:bg-slate-50"
                }`}
                aria-current={selected ? "step" : undefined}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    selected ? "bg-[#148454] text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span className={`text-sm font-semibold ${selected ? "text-slate-900" : "text-slate-600"}`}>{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[420px] p-6 pr-16 md:p-8 md:pr-20">
          <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-[#148454]"
              animate={{ width: `${((active + 1) / easmFlowStages.length) * 100}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0b78d4]">
                Step {active + 1} of {easmFlowStages.length}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">{stage.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{stage.detail}</p>
              <div className="mt-6 space-y-3">
                {stage.rows.map((row, index) => (
                  <motion.div
                    key={`${stage.title}-${row.name}`}
                    className="grid grid-cols-[1.3fr_1fr_auto] items-center gap-3 rounded-2xl border border-slate-200 px-4 py-4"
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.3 }}
                  >
                    <span className="font-semibold">{row.name}</span>
                    <span className="text-sm text-slate-500">{row.note}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass(row.status)}`}>{row.status}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
