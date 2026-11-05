import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const kris = [
  { name: "Policy exceptions", value: 14, limit: 10, points: [6, 7, 8, 9, 11, 10, 12, 14] },
  { name: "Overdue tests", value: 6, limit: 8, points: [12, 11, 10, 9, 9, 8, 7, 6] },
  { name: "Audit findings", value: 9, limit: 5, points: [3, 4, 4, 5, 6, 7, 8, 9] },
  { name: "Days to acknowledge", value: 4, limit: 7, points: [9, 8, 8, 7, 6, 5, 5, 4] },
];

const renewals = {
  name: "Policy renewals",
  points: [71, 74, 70, 76, 80, 78, 83, 86],
  target: 90,
  now: "86%",
  note: "8 of 12 renewed · 4 overdue",
  color: "#0c90f0",
};

const acknowledgement = {
  name: "Acknowledgement",
  points: [62, 68, 71, 76, 81, 85, 88, 91],
  target: 95,
  now: "91%",
  note: "Target 95% · climbing",
  color: "#189c60",
};

const controls = [
  { name: "Access reviews", risk: 84, compliance: 92 },
  { name: "Logging coverage", risk: 62, compliance: 72 },
  { name: "Change control", risk: 76, compliance: 84 },
  { name: "Vendor assurance", risk: 70, compliance: 88 },
];

const projects = [
  { name: "Identity programme", days: 18 },
  { name: "Cloud baseline", days: 31 },
  { name: "SOC tooling", days: 6 },
  { name: "DR exercise", days: 12 },
];

const riskScore = Math.round(controls.reduce((sum, item) => sum + item.risk, 0) / controls.length);
const complianceScore = Math.round(controls.reduce((sum, item) => sum + item.compliance, 0) / controls.length);

const CountUp = ({ to, run }: { to: number; run: boolean }) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.3, ease: "easeOut", onUpdate: (next) => setValue(Math.round(next)) });
    return () => controls.stop();
  }, [to, run, reduce]);
  return <>{value}</>;
};

const Trend = ({
  points,
  target,
  color,
  run,
}: {
  points: number[];
  target: number;
  color: string;
  run: boolean;
}) => {
  const reduce = useReducedMotion();
  const width = 160;
  const height = 52;
  const pad = 5;
  const all = [...points, target];
  const min = Math.min(...all) - 4;
  const max = Math.max(...all) + 4;
  const x = (index: number) => pad + (index / (points.length - 1)) * (width - pad * 2);
  const y = (value: number) => height - pad - ((value - min) / (max - min)) * (height - pad * 2);
  const path = points.map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(1)} ${y(value).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-12 w-full" aria-hidden="true">
      <line x1={pad} x2={width - pad} y1={y(target)} y2={y(target)} stroke="#fccc0c" strokeWidth="1.5" strokeDasharray="4 4" />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: run ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.3, ease: "easeInOut" }}
      />
    </svg>
  );
};

export const GovernanceDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();
  const run = inView || !!reduce;
  const breached = kris.filter((item) => item.value > item.limit).length;

  return (
    <div
      ref={ref}
      className="min-w-0 rounded-[1.75rem] border border-white/10 bg-[#0b1424] p-5 text-white shadow-2xl shadow-[#002490]/20 md:p-6"
      aria-label="Sample security governance dashboard"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189c60] opacity-70" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#189c60]" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Security governance</p>
          </div>
          <p className="mt-1 font-display text-xl font-semibold">Programme dashboard</p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">Sample</span>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">Governance KRIs</p>
          <p className="text-[11px] text-[#ff7a66]">{breached} above limit</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {kris.map((item) => {
            const over = item.value > item.limit;
            return (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold leading-4">{item.name}</p>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${over ? "bg-[#fc3018]" : "bg-[#189c60]"}`}>
                    {over ? "Over" : "Within"}
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold">
                  <CountUp to={item.value} run={run} />
                </p>
                <Trend points={item.points} target={item.limit} color={over ? "#fc3018" : "#189c60"} run={run} />
                <p className="mt-1 text-[11px] text-white/50">Limit {item.limit}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">Policy renewals and acknowledgement</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[renewals, acknowledgement].map((series) => (
            <div key={series.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-xs font-semibold">{series.name}</p>
              <p className="mt-1 font-display text-2xl font-bold">{series.now}</p>
              <Trend points={series.points} target={series.target} color={series.color} run={run} />
              <p className="mt-1 text-[11px] leading-4 text-white/50">{series.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">Controls effectiveness</p>
          <p className="text-[11px] text-white/50">
            Risk <span className="font-semibold text-[#7ec8ff]">{riskScore}%</span>
            <span className="px-1">·</span>
            Compliance <span className="font-semibold text-[#5fd39a]">{complianceScore}%</span>
          </p>
        </div>
        <div className="mt-3 space-y-3">
          {controls.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold">{item.name}</span>
                <span className="text-white/50">
                  <span className="text-[#7ec8ff]">{item.risk}</span>
                  <span className="px-1">/</span>
                  <span className="text-[#5fd39a]">{item.compliance}</span>
                </span>
              </div>
              <div className="mt-1.5 space-y-1">
                {[
                  { value: item.risk, color: "#0c90f0" },
                  { value: item.compliance, color: "#189c60" },
                ].map((bar) => (
                  <div key={bar.color} className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: bar.color }}
                      initial={{ width: reduce ? `${bar.value}%` : "0%" }}
                      animate={{ width: run ? `${bar.value}%` : "0%" }}
                      transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.15 + index * 0.08, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-white/45">Blue against risk · green against compliance</p>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">Projects spilling over</p>
            <p className="mt-1 text-xs text-white/50">Past the planned end date</p>
          </div>
          <p className="font-display text-3xl font-bold text-[#ffb36b]">
            <CountUp to={projects.length} run={run} />
            <span className="text-base font-semibold text-white/50"> of 11</span>
          </p>
        </div>
        <ul className="mt-3 space-y-2">
          {projects.map((project, index) => (
            <motion.li
              key={project.name}
              className="flex items-center justify-between gap-3 text-sm"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: run ? 1 : 0, y: run ? 0 : 8 }}
              transition={{ delay: reduce ? 0 : 0.4 + index * 0.1, duration: 0.35 }}
            >
              <span>{project.name}</span>
              <span className="font-semibold text-[#ffb36b]">+{project.days} days</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
