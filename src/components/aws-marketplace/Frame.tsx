import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type FrameProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const MarketplaceFrame = ({ eyebrow, title, description, children }: FrameProps) => (
  <div className="min-h-screen bg-background bg-gradient-main">
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <Link to="/" className="mb-8 text-sm font-medium text-muted-foreground hover:text-foreground">
        Observeri
      </Link>
      <div className="rounded-3xl border-gradient bg-gradient-card p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-display font-bold md:text-4xl">{title}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  </div>
);
