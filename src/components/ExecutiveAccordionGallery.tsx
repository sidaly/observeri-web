import { useState, type KeyboardEvent, type PointerEvent } from "react";

const leaders = [
  {
    role: "Board",
    image: "/exec-board.webp",
    alt: "An empty boardroom table in morning light",
    tint: "#189c60",
    problem: "Risk reaches the board after the decision.",
    solution: "One enterprise index, with appetite and a response ready for each threshold.",
  },
  {
    role: "CEO",
    image: "/exec-ceo.webp",
    alt: "A corner office looking over a city",
    tint: "#7eb6ff",
    problem: "Reputation is exposed before the team shares one view.",
    solution: "Cyber, operational, financial, and continuity risk, reported together in time to act.",
  },
  {
    role: "CFO",
    image: "/exec-cfo.webp",
    alt: "A closed folio and pen on a marble desk",
    tint: "#0c90f0",
    problem: "Risk spend cannot be set against the loss it reduces.",
    solution: "Expected annual loss, operational capital, and regulatory capital, stated in currency.",
  },
  {
    role: "CRO",
    image: "/exec-cro.webp",
    alt: "A meeting table with a single line of light",
    tint: "#fc3018",
    problem: "Each domain keeps its own register.",
    solution: "Every domain keeps its measure and augments one index.",
  },
  {
    role: "CTO",
    image: "/exec-cto.webp",
    alt: "A quiet technology corridor with a line of blue light",
    tint: "#9fd0ff",
    problem: "The estate, the cloud, and the vulnerabilities are separate queues.",
    solution: "Scheduled posture across on-premises and cloud, on the same risk record.",
  },
  {
    role: "CISO",
    image: "/exec-ciso.webp",
    alt: "A dark operations desk lit by a single lamp",
    tint: "#fc840c",
    problem: "A control, a finding, and an incident are updated in three places.",
    solution: "Effectiveness writes back to the mapped risk, compliance record, and incident.",
  },
];

export const ExecutiveAccordionGallery = () => {
  const [active, setActive] = useState(0);

  const onKeyDown = (index: number, event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index + 1) % leaders.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index - 1 + leaders.length) % leaders.length);
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const shift = ((event.clientX - rect.left) / rect.width - 0.5) * 28;
    event.currentTarget.style.setProperty("--shift", `${shift}px`);
  };

  return (
    <section className="border-b border-border/40 py-20" aria-labelledby="who-observeri-helps">
      <style>{`
        .exec-gallery {
          display: flex;
          gap: 10px;
          height: 480px;
          perspective: 1400px;
        }
        .exec-panel {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 0;
          padding: 0;
          border-radius: 16px;
          background: #101418;
          color: white;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: flex-grow .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1);
        }
        .exec-panel:focus-visible {
          outline: 2px solid #189c60;
          outline-offset: 3px;
        }
        .exec-media {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 148%;
          height: 100%;
          transform: translate(-50%, -50%) translateX(var(--drift, 0px));
          filter: grayscale(var(--gray, 1));
          transition: transform .6s cubic-bezier(.22,1,.36,1), filter .6s ease;
        }
        .exec-panel--active .exec-media {
          transform: translate(calc(-50% + var(--shift, 0px)), -50%);
        }
        .exec-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 42%, rgba(8,10,14,.82) 100%),
            rgba(8,10,14, var(--dim, .4));
          transition: background .6s ease;
        }
        .exec-caption {
          position: absolute;
          left: 20px;
          right: 16px;
          bottom: 18px;
          display: flex;
          gap: 12px;
          text-align: left;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity .45s ease, transform .45s ease;
        }
        .exec-panel--active .exec-caption {
          opacity: 1;
          transform: none;
        }
        .exec-strip {
          position: absolute;
          left: 50%;
          top: 50%;
          color: white;
          font-size: .8rem;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          white-space: nowrap;
          transform: translate(-50%, -50%) rotate(-90deg);
          text-shadow: 0 2px 12px rgba(0,0,0,.55);
        }
        .exec-panel--active .exec-strip { display: none; }
        @media (max-width: 768px) {
          .exec-gallery { flex-direction: column; height: auto; perspective: none; }
          .exec-panel { height: 76px; flex: none !important; transform: none !important; }
          .exec-panel--active { height: 320px; }
          .exec-media { width: 100%; }
          .exec-strip { transform: none; left: 16px; top: auto; bottom: 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .exec-panel, .exec-media, .exec-caption { transition: none; }
          .exec-panel { transform: none !important; }
        }
      `}</style>
      <div className="container mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Who it serves</p>
        <h2 id="who-observeri-helps" className="mt-3 max-w-3xl text-3xl font-display font-bold md:text-4xl">
          How Observeri helps the people who own the risk.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">One problem. One answer.</p>
        <div className="exec-gallery mt-10" role="list" aria-label="How Observeri helps each leader">
          {leaders.map((leader, index) => {
            const isActive = index === active;
            const tilt = isActive ? 0 : index < active ? 7 : -7;
            return (
              <button
                key={leader.role}
                type="button"
                className={`exec-panel${isActive ? " exec-panel--active" : ""}`}
                style={{
                  flexGrow: isActive ? 5.4 : 1,
                  transform: `rotateY(${tilt}deg)`,
                  ["--gray" as string]: isActive ? 0 : 1,
                  ["--dim" as string]: isActive ? 0.05 : 0.42,
                  ["--drift" as string]: isActive ? "0px" : index < active ? "-16px" : "16px",
                }}
                aria-current={isActive ? "true" : undefined}
                aria-expanded={isActive}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onPointerMove={isActive ? onPointerMove : undefined}
                onKeyDown={(event) => onKeyDown(index, event)}
              >
                <span className="exec-media" aria-hidden="true">
                  <img src={leader.image} alt="" className="h-full w-full object-cover" />
                </span>
                <span className="exec-overlay" aria-hidden="true" />
                <span className="exec-strip">{leader.role}</span>
                <span className="exec-caption">
                  <span className="mt-1 h-7 w-[3px] shrink-0 rounded-full" style={{ background: leader.tint }} />
                  <span>
                    <span className="block text-lg font-semibold">{leader.role}</span>
                    <span className="mt-2 block text-sm font-normal leading-5 text-white/85">{leader.problem}</span>
                    <span className="mt-2 block text-sm font-normal leading-5 text-white">{leader.solution}</span>
                  </span>
                </span>
                <span className="sr-only">
                  {leader.role}. Problem: {leader.problem} Solution: {leader.solution}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
