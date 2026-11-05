import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, type KeyboardEvent, type PointerEvent } from "react";

const people = [
  {
    name: "Michael",
    role: "Chief Executive Officer",
    strip: "CEO",
    years: "20+ years",
    image: "/team-ceo.jpg",
    tint: "#7eb6ff",
    bio: "More than 20 years leading regulated businesses, from the operating plan through to the board. He sets Observeri's direction around the decision the customer has to make.",
  },
  {
    name: "Syed Ali Naqvi",
    role: "Country Manager",
    strip: "Country",
    years: "17+ years",
    image: "/team-country.jpg",
    tint: "#fc3018",
    bio: "A seasoned risk management professional with more than 17 years at Revolut, HBL Bank, and KPMG, across more than 14 regulatory regimes. He assesses each risk domain against the customer journey.",
  },
  {
    name: "Sarah Lawrence",
    role: "Revenue Officer",
    strip: "Revenue",
    years: "10+ years",
    image: "/team-revenue.jpg",
    tint: "#0c90f0",
    bio: "More than 10 years in enterprise sales and marketing. She takes Observeri to the buyers who own risk and compliance, and she runs the revenue that follows.",
  },
  {
    name: "Anis",
    role: "Product Management",
    strip: "Product",
    years: "20+ years",
    image: "/team-product.jpg",
    tint: "#e36b00",
    bio: "More than 20 years developing products around fraud, enterprise risk, and compliance. Anis shapes those products around the decisions risk and compliance teams have to make.",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  const onKeyDown = (index: number, event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index + 1) % people.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index - 1 + people.length) % people.length);
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const shift = ((event.clientX - rect.left) / rect.width - 0.5) * 28;
    event.currentTarget.style.setProperty("--shift", `${shift}px`);
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <main className="pb-24 pt-32">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">Observeri Technologies</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold md:text-5xl">The team behind the platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Observeri Technologies is headquartered in Dubai, United Arab Emirates. The solution was developed by
            specialists in risk and compliance, with a combined experience of 50+ years. Every domain of risk has a
            product manager who assesses the customer journey and built the platform.
          </p>
        </div>

        <style>{`
          .team-gallery {
            display: flex;
            gap: 10px;
            height: 620px;
            perspective: 1400px;
          }
          .team-panel {
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
          .team-panel:focus-visible {
            outline: 2px solid #189c60;
            outline-offset: 3px;
          }
          .team-media {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 148%;
            height: 100%;
            transform: translate(-50%, -50%) translateX(var(--drift, 0px));
            filter: grayscale(var(--gray, 1));
            transition: transform .6s cubic-bezier(.22,1,.36,1), filter .6s ease;
          }
          .team-panel--active .team-media {
            transform: translate(calc(-50% + var(--shift, 0px)), -50%);
          }
          .team-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(180deg, transparent 36%, rgba(8,10,14,.88) 100%),
              rgba(8,10,14, var(--dim, .4));
            transition: background .6s ease;
          }
          .team-caption {
            position: absolute;
            left: 22px;
            right: 20px;
            bottom: 22px;
            display: flex;
            gap: 12px;
            text-align: left;
            opacity: 0;
            transform: translateX(-12px);
            transition: opacity .45s ease, transform .45s ease;
          }
          .team-panel--active .team-caption {
            opacity: 1;
            transform: none;
          }
          .team-strip {
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
          .team-panel--active .team-strip { display: none; }
          @media (max-width: 768px) {
            .team-gallery { flex-direction: column; height: auto; perspective: none; }
            .team-panel { height: 76px; flex: none !important; transform: none !important; }
            .team-panel--active { height: 420px; }
            .team-media { width: 100%; }
            .team-strip { transform: none; left: 16px; top: auto; bottom: 22px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .team-panel, .team-media, .team-caption { transition: none; }
            .team-panel { transform: none !important; }
          }
        `}</style>

        <div className="container mx-auto mt-12 max-w-6xl px-6">
          <div className="team-gallery" role="list" aria-label="Observeri leadership">
            {people.map((person, index) => {
              const isActive = index === active;
              const tilt = isActive ? 0 : index < active ? 7 : -7;
              return (
                <button
                  key={person.name}
                  type="button"
                  className={`team-panel${isActive ? " team-panel--active" : ""}`}
                  style={{
                    flexGrow: isActive ? 5.4 : 1,
                    transform: `rotateY(${tilt}deg)`,
                    ["--gray" as string]: isActive ? 0 : 1,
                    ["--dim" as string]: isActive ? 0.08 : 0.42,
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
                  <span className="team-media" aria-hidden="true">
                    <img src={person.image} alt="" className="h-full w-full object-cover" />
                  </span>
                  <span className="team-overlay" aria-hidden="true" />
                  <span className="team-strip">{person.strip}</span>
                  <span className="team-caption">
                    <span className="mt-1 h-16 w-[3px] shrink-0 rounded-full" style={{ background: person.tint }} />
                    <span>
                      <span className="block text-xl font-semibold">{person.name}</span>
                      <span className="mt-1 block text-sm text-white/80">
                        {person.role} · {person.years}
                      </span>
                      <span className="mt-3 block text-sm font-normal leading-6 text-white/90">{person.bio}</span>
                    </span>
                  </span>
                  <span className="sr-only">
                    {person.name}, {person.role}, {person.years}. {person.bio}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-8 text-sm leading-7 text-muted-foreground">
            For company enquiries, contact{" "}
            <a className="text-primary underline" href="mailto:connect@observeri.com">
              connect@observeri.com
            </a>
            .{" "}
            <a
              className="text-primary underline"
              href="https://www.linkedin.com/company/observeri-technologies"
              target="_blank"
              rel="noreferrer"
            >
              Observeri Technologies on LinkedIn
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
