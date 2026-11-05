import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const tiers = [
  { name: "Critical", count: 4, color: "#d42516" },
  { name: "High", count: 14, color: "#e36b00" },
  { name: "Medium", count: 31, color: "#0b78d4" },
  { name: "Low", count: 37, color: "#148454" },
];

const hosts = [
  { name: "pay-api.northwind.io", vendor: "Northwind Pay", note: "New host", tone: "text-[#d42516] bg-[#fdeceb]" },
  { name: "sso.ledgermail.com", vendor: "LedgerMail", note: "Certificate due", tone: "text-[#e36b00] bg-[#fff4e8]" },
  { name: "files.helio-payroll.net", vendor: "Helio Payroll", note: "Changed", tone: "text-[#0b78d4] bg-[#e8f4fd]" },
  { name: "status.atlas-cloud.io", vendor: "Atlas Cloud", note: "Unchanged", tone: "text-[#148454] bg-[#eef6f1]" },
];

const fourthParties = [
  { name: "Atlas Cloud", via: "Helio Payroll", hosts: 6 },
  { name: "Mailroute", via: "LedgerMail", hosts: 3 },
  { name: "EdgeCDN", via: "Northwind Pay", hosts: 4 },
];

const vendorCount = tiers.reduce((sum, tier) => sum + tier.count, 0);

const CountUp = ({ to, run }: { to: number; run: boolean }) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.1, ease: "easeOut", onUpdate: (next) => setValue(Math.round(next)) });
    return () => controls.stop();
  }, [to, run, reduce]);
  return <>{value}</>;
};

export const ThirdPartyRiskDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const reduce = useReducedMotion();
  const run = inView || !!reduce;

  return (
    <div
      ref={ref}
      className="min-w-0 rounded-[1.75rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm md:p-6"
      aria-label="Sample third-party risk dashboard"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189c60] opacity-70" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#189c60]" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#148454]">Third-party risk</p>
          </div>
          <p className="mt-1 font-display text-xl font-semibold">Vendor exposure</p>
          <p className="mt-1 text-xs text-slate-500">Sample data · hosts watched in real time</p>
        </div>
        <span className="rounded-full bg-[#eef6f1] px-3 py-1 text-xs font-semibold text-[#148454]">Sample</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Vendors", value: vendorCount },
          { label: "High or critical", value: 18 },
          { label: "Hosts live", value: 142 },
          { label: "Fourth parties", value: 27 },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-2">
            <p className="font-display text-lg font-bold">
              <CountUp to={item.value} run={run} />
            </p>
            <p className="text-[10px] uppercase tracking-wide text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Vendors by tier</p>
        <div className="mt-3 space-y-2.5">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="grid grid-cols-[4.5rem_2rem_minmax(0,1fr)] items-center gap-2">
              <p className="text-sm font-medium">{tier.name}</p>
              <p className="text-sm font-semibold tabular-nums" style={{ color: tier.color }}>
                {tier.count}
              </p>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: tier.color }}
                  initial={{ width: reduce ? `${(tier.count / vendorCount) * 100}%` : "0%" }}
                  animate={{ width: run ? `${(tier.count / vendorCount) * 100}%` : "0%" }}
                  transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : index * 0.06, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Vendor hosts · External Attack Surface Management
        </p>
        <div className="mt-3 space-y-2">
          {hosts.map((host) => (
            <div key={host.name} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${host.tone}`}>{host.note}</span>
                <p className="min-w-0 truncate text-sm font-semibold">{host.name}</p>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">{host.vendor}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Fourth parties identified</p>
        <div className="mt-3 space-y-2">
          {fourthParties.map((party) => (
            <div key={party.name} className="rounded-xl border border-slate-200 px-3 py-2">
              <p className="text-sm font-semibold">
                {party.name}
                <span className="ml-2 tabular-nums text-[#002490]">{party.hosts} hosts</span>
              </p>
              <p className="text-[11px] text-slate-500">Behind {party.via}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
