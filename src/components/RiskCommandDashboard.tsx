import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const index = { value: 72, previous: 66, appetite: 65, status: "Elevated" };

const exposures = [
  { name: "Cyber Risk", amount: "$4.2M", score: 78, change: "+6", color: "#fc3018" },
  { name: "Operational Risk", amount: "$2.8M", score: 64, change: "+2", color: "#fc840c" },
  { name: "Technology Risk", amount: "$1.9M", score: 58, change: "-3", color: "#0c90f0" },
  { name: "Financial Risk", amount: "$3.1M", score: 69, change: "+4", color: "#002490" },
  { name: "ESG Risk", amount: "$0.9M", score: 41, change: "-1", color: "#189c60" },
];

const kris = [
  {
    name: "Critical vulnerabilities past SLA",
    domain: "Cyber",
    unit: "",
    threshold: 20,
    points: [11, 13, 12, 16, 18, 17, 22, 25, 24, 28],
  },
  {
    name: "Failed payment runs",
    domain: "Operational",
    unit: "",
    threshold: 6,
    points: [3, 4, 3, 5, 4, 6, 5, 7, 8, 7],
  },
  {
    name: "Liquidity coverage headroom",
    domain: "Financial",
    unit: "%",
    threshold: 110,
    inverse: true,
    points: [128, 126, 124, 121, 119, 117, 115, 112, 109, 107],
  },
  {
    name: "Unpatched cloud workloads",
    domain: "Technology",
    unit: "",
    threshold: 30,
    points: [34, 31, 29, 27, 28, 26, 24, 25, 22, 21],
  },
];

const decisions = [
  { time: "09:42", owner: "CISO", text: "Funded identity hardening against cyber exposure", status: "Funded" },
  { time: "10:15", owner: "CRO", text: "Escalated liquidity headroom breach to the risk committee", status: "Escalated" },
  { time: "11:03", owner: "COO", text: "Opened a war room for failed payment runs", status: "War room" },
  { time: "11:28", owner: "CTO", text: "Accepted residual cloud patching risk until the next window", status: "Accepted" },
];

const decisionColor: Record<string, string> = {
  Funded: "#189c60",
  Escalated: "#fc3018",
  "War room": "#fc840c",
  Accepted: "#0c90f0",
};

const CountUp = ({ to, run }: { to: number; run: boolean }) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!run || reduce) {
      if (reduce) setValue(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [to, run, reduce]);
  return <>{value}</>;
};

const Gauge = ({ value, run }: { value: number; run: boolean }) => {
  const reduce = useReducedMotion();
  const radius = 80;
  const length = Math.PI * radius;
  const target = length * (1 - value / 100);
  return (
    <svg viewBox="0 0 200 116" className="h-auto w-full max-w-[280px]" aria-hidden="true">
      <defs>
        <linearGradient id="gri-arc" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#189c60" />
          <stop offset="55%" stopColor="#fccc0c" />
          <stop offset="100%" stopColor="#fc3018" />
        </linearGradient>
      </defs>
      <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#e2e8f0" strokeWidth="14" strokeLinecap="round" />
      <motion.path
        d="M20 100 A80 80 0 0 1 180 100"
        fill="none"
        stroke="url(#gri-arc)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={length}
        initial={{ strokeDashoffset: reduce ? target : length }}
        animate={{ strokeDashoffset: run ? target : length }}
        transition={{ duration: reduce ? 0 : 1.6, ease: "easeOut" }}
      />
    </svg>
  );
};

const Sparkline = ({ points, threshold, inverse, run }: { points: number[]; threshold: number; inverse?: boolean; run: boolean }) => {
  const reduce = useReducedMotion();
  const width = 220;
  const height = 64;
  const all = [...points, threshold];
  const min = Math.min(...all) * 0.92;
  const max = Math.max(...all) * 1.06;
  const pad = 6;
  const x = (i: number) => pad + (i / (points.length - 1)) * (width - pad * 2);
  const y = (v: number) => height - pad - ((v - min) / (max - min)) * (height - pad * 2);
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const breached = (v: number) => (inverse ? v < threshold : v > threshold);
  const last = points[points.length - 1];
  const color = breached(last) ? "#fc3018" : "#189c60";
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-16 w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" x2={width} y1={y(threshold)} y2={y(threshold)} stroke="#c8960a" strokeWidth="1.5" strokeDasharray="5 5" />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: run ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut" }}
      />
      {points.map((v, i) =>
        breached(v) ? (
          <motion.circle
            key={i}
            cx={x(i)}
            cy={y(v)}
            r="3.5"
            fill="#fc3018"
            initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0 }}
            animate={{ opacity: run ? 1 : 0, scale: run ? 1 : 0 }}
            transition={{ delay: reduce ? 0 : 0.8 + i * 0.08, duration: 0.3 }}
          />
        ) : null,
      )}
    </svg>
  );
};

export const RiskCommandDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();
  const run = inView || !!reduce;

  const breaches = kris.filter((kri) => {
    const last = kri.points[kri.points.length - 1];
    return kri.inverse ? last < kri.threshold : last > kri.threshold;
  }).length;

  return (
    <section className="border-b border-border/40 py-20" aria-labelledby="risk-command-dashboard">
      <div className="container mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Enterprise risk view</p>
        <h2 id="risk-command-dashboard" className="mt-3 max-w-3xl text-3xl font-display font-bold md:text-4xl">
          From one index to the decision that was taken.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          The global risk index, exposure by domain, KRI breaches against threshold, and the decisions that followed. Sample data.
        </p>

        <div
          ref={ref}
          className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189c60] opacity-70" />}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#189c60]" />
              </span>
              <p className="text-sm font-semibold tracking-wide">Observeri risk command</p>
            </div>
            <p className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample data · last 10 weeks</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Global Risk Index</p>
              <div className="relative mt-3 w-full max-w-[280px]">
                <Gauge value={index.value} run={run} />
                <div className="absolute inset-x-0 bottom-0 text-center">
                  <p className="font-display text-5xl font-bold">
                    <CountUp to={index.value} run={run} />
                  </p>
                  <p className="text-xs text-slate-500">out of 100</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                <span className="rounded-full bg-[#fff4e8] px-3 py-1 font-semibold text-[#e36b00]">{index.status}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">+{index.value - index.previous} vs last month</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Appetite {index.appetite}</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Exposure by domain</p>
              <div className="mt-4 space-y-3">
                {exposures.map((item, i) => (
                  <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold">{item.name}</span>
                      <span className="flex items-center gap-3">
                        <span className="text-slate-500">{item.amount}</span>
                        <span className={item.change.startsWith("+") ? "text-[#d42516]" : "text-[#148454]"}>{item.change}</span>
                        <span className="w-8 text-right font-display font-bold">{item.score}</span>
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: reduce ? `${item.score}%` : "0%" }}
                        animate={{ width: run ? `${item.score}%` : "0%" }}
                        transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.2 + i * 0.12, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">KRI breaches against threshold</p>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-[#d42516]">{breaches} breached</span> · dashed line is the threshold
              </p>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {kris.map((kri) => {
                const last = kri.points[kri.points.length - 1];
                const breached = kri.inverse ? last < kri.threshold : last > kri.threshold;
                return (
                  <div key={kri.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{kri.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{kri.domain}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          breached ? "bg-[#fc3018] text-white" : "bg-[#189c60] text-white"
                        }`}
                      >
                        {breached ? "Breach" : "Within"}
                      </span>
                    </div>
                    <div className="mt-3">
                      <Sparkline points={kri.points} threshold={kri.threshold} inverse={kri.inverse} run={run} />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Now <span className="font-semibold text-slate-900">{last}{kri.unit}</span> · threshold {kri.inverse ? "≥" : "≤"} {kri.threshold}
                      {kri.unit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Decisions taken</p>
            <ol className="mt-4 space-y-3">
              {decisions.map((decision, i) => (
                <motion.li
                  key={decision.text}
                  className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
                  animate={{ opacity: run ? 1 : 0, y: run ? 0 : 12 }}
                  transition={{ delay: reduce ? 0 : 1.2 + i * 0.18, duration: 0.4 }}
                >
                  <span className="w-12 font-mono text-xs text-slate-500">{decision.time}</span>
                  <span className="rounded-md bg-slate-200 px-2 py-0.5 text-xs font-semibold">{decision.owner}</span>
                  <span className="min-w-0 flex-1 text-slate-700">{decision.text}</span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                    style={{ background: decisionColor[decision.status] }}
                  >
                    {decision.status}
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
