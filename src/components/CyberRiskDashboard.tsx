import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const loss = 4.2;

const scenarios = [
  { name: "Ransomware", amount: 2.4 },
  { name: "Business email compromise", amount: 0.9 },
  { name: "Cloud data exposure", amount: 0.6 },
  { name: "Privileged misuse", amount: 0.3 },
];

const history = [3.6, 3.8, 3.7, 4.0, 4.1, 4.2];
const future = [4.4, 4.6, 4.3];
const forecastEnd = future[future.length - 1];

const comparisons = [
  { name: "Ransomware", inherent: 92, residual: 61 },
  { name: "Business email compromise", inherent: 84, residual: 48 },
  { name: "Cloud data exposure", inherent: 77, residual: 55 },
  { name: "Privileged misuse", inherent: 70, residual: 36 },
];

const accepted = [
  { name: "Legacy VPN", owner: "CISO", until: "30 Jun", amount: "$180k" },
  { name: "Lab segment patch gap", owner: "CTO", until: "15 May", amount: "$90k" },
  { name: "Vendor logging gap", owner: "CRO", until: "1 Aug", amount: "$130k" },
];

const severities = [
  { label: "Critical", value: 2, color: "#d42516" },
  { label: "High", value: 5, color: "#e36b00" },
  { label: "Medium", value: 8, color: "#c8960a" },
  { label: "Low", value: 11, color: "#148454" },
];

const inherentScore = Math.round(comparisons.reduce((sum, item) => sum + item.inherent, 0) / comparisons.length);
const residualScore = Math.round(comparisons.reduce((sum, item) => sum + item.residual, 0) / comparisons.length);
const largest = Math.max(...scenarios.map((item) => item.amount));

const CountUp = ({ to, run, decimals = 0 }: { to: number; run: boolean; decimals?: number }) => {
  const reduce = useReducedMotion();
  const format = (value: number) => value.toFixed(decimals);
  const [value, setValue] = useState(reduce ? format(to) : format(0));
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(format(to));
      return;
    }
    const controls = animate(0, to, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (next) => setValue(format(next)),
    });
    return () => controls.stop();
  }, [to, run, reduce, decimals]);
  return <>{value}</>;
};

const Forecast = ({ run }: { run: boolean }) => {
  const reduce = useReducedMotion();
  const series = [...history, ...future];
  const width = 280;
  const height = 78;
  const pad = 8;
  const min = 3.2;
  const max = 5;
  const x = (index: number) => pad + (index / (series.length - 1)) * (width - pad * 2);
  const y = (value: number) => height - pad - ((value - min) / (max - min)) * (height - pad * 2);
  const path = (from: number, to: number) =>
    series
      .slice(from, to + 1)
      .map((value, index) => `${index === 0 ? "M" : "L"}${x(from + index).toFixed(1)} ${y(value).toFixed(1)}`)
      .join(" ");
  const now = history.length - 1;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-16 w-full" aria-hidden="true">
      <line x1={x(now)} x2={x(now)} y1={pad} y2={height - pad} stroke="#cbd5e1" strokeDasharray="3 3" />
      <motion.path
        d={path(0, now)}
        fill="none"
        stroke="#0b78d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: run ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d={path(now, series.length - 1)}
        fill="none"
        stroke="#e36b00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 4"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: run ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.8 }}
      />
    </svg>
  );
};

export const CyberRiskDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();
  const run = inView || !!reduce;

  return (
    <div
      ref={ref}
      className="min-w-0 rounded-[1.75rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm md:p-6"
      aria-label="Sample cyber risk dashboard"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189c60] opacity-70" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#189c60]" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#148454]">Cyber risk</p>
          </div>
          <p className="mt-1 font-display text-xl font-semibold">Risk dashboard</p>
        </div>
        <span className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample</span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {severities.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-center">
            <p className="font-display text-lg font-bold" style={{ color: item.color }}>
              <CountUp to={item.value} run={run} />
            </p>
            <p className="text-[10px] uppercase tracking-wide text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Cyber risk quantification</p>
        <p className="mt-2 font-display text-3xl font-bold">
          $<CountUp to={loss} run={run} decimals={1} />
          <span className="text-base font-semibold text-slate-500">M</span>
        </p>
        <p className="text-[11px] text-slate-500">Expected annual loss</p>
        <div className="mt-3 space-y-2.5">
          {scenarios.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold">{item.name}</span>
                <span className="text-slate-600">${item.amount.toFixed(1)}M</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-[#0b78d4]"
                  initial={{ width: reduce ? `${(item.amount / largest) * 100}%` : "0%" }}
                  animate={{ width: run ? `${(item.amount / largest) * 100}%` : "0%" }}
                  transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.12 * index, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Risk prediction</p>
          <p className="text-[11px] text-slate-500">Next 90 days</p>
        </div>
        <Forecast run={run} />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-[#0b78d4]" /> Observed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-[#e36b00]" /> Forecast ${forecastEnd.toFixed(1)}M
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Inherent vs residual</p>
          <p className="text-[11px] text-slate-500">
            <span className="font-semibold text-[#d42516]">{inherentScore}</span>
            <span className="px-1">→</span>
            <span className="font-semibold text-[#148454]">{residualScore}</span>
          </p>
        </div>
        <div className="mt-3 space-y-3">
          {comparisons.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold">{item.name}</span>
                <span className="text-slate-500">
                  <span className="text-[#d42516]">{item.inherent}</span>
                  <span className="px-1">/</span>
                  <span className="text-[#148454]">{item.residual}</span>
                </span>
              </div>
              <div className="mt-1.5 space-y-1">
                {[
                  { value: item.inherent, color: "#d42516" },
                  { value: item.residual, color: "#148454" },
                ].map((bar) => (
                  <div key={bar.color} className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: bar.color }}
                      initial={{ width: reduce ? `${bar.value}%` : "0%" }}
                      animate={{ width: run ? `${bar.value}%` : "0%" }}
                      transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.1 + index * 0.08, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-slate-500">Red is inherent · green is residual</p>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Accepted risk</p>
        <p className="mt-1 font-display text-3xl font-bold text-[#e36b00]">
          <CountUp to={accepted.length} run={run} />
          <span className="text-base font-semibold text-slate-500"> · $0.4M</span>
        </p>
        <p className="mt-1 text-xs text-slate-500">Kept, with an owner and an expiry</p>
        <ul className="mt-3 space-y-2.5">
          {accepted.map((item, index) => (
            <motion.li
              key={item.name}
              className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: run ? 1 : 0, y: run ? 0 : 8 }}
              transition={{ delay: reduce ? 0 : 0.35 + index * 0.1, duration: 0.35 }}
            >
              <span className="font-semibold">{item.name}</span>
              <span className="text-xs text-slate-500">
                {item.owner} · until {item.until} · <span className="font-semibold text-[#e36b00]">{item.amount}</span>
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] text-slate-500">5 treatments open · 2 awaiting sign-off</p>
      </div>
    </div>
  );
};
