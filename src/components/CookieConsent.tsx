import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "observeri-cookie-consent";
const VERSION = 1;
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choices = { analytics: boolean; marketing: boolean; media: boolean };
type Consent = Choices & { version: number; savedAt: number };
const ConsentContext = createContext<{ consent: Consent | null; openSettings: () => void }>({ consent: null, openSettings: () => {} });
// The hook shares this provider's context; keeping it here avoids a second context instance.
// eslint-disable-next-line react-refresh/only-export-components
export const useCookieConsent = () => useContext(ConsentContext);

function readConsent(): Consent | null {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (value?.version === VERSION && typeof value.analytics === "boolean" && typeof value.marketing === "boolean" && typeof value.media === "boolean" &&
      typeof value.savedAt === "number" && value.savedAt <= Date.now() && Date.now() - value.savedAt < MAX_AGE) return value;
  } catch { /* Unavailable or invalid storage must never imply consent. */ }
  return null;
}

function clearTrackingCookies() {
  const hostParts = location.hostname.split(".");
  const domains = ["", ...hostParts.map((_, i) => hostParts.slice(i).join("."))];
  const pathParts = location.pathname.split("/").filter(Boolean);
  const paths = ["/", ...pathParts.map((_, i) => "/" + pathParts.slice(0, i + 1).join("/"))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^(_ga|_gid|_gat|_gcl|_gac)/.test(name)) continue;
    for (const domain of domains) for (const path of paths) {
      document.cookie = `${name}=; Max-Age=0; Path=${path}${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [choices, setChoices] = useState<Choices>({ analytics: false, marketing: false, media: false });

  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    if (!saved?.marketing) clearTrackingCookies();
  }, []);

  useEffect(() => {
    const refresh = () => {
      const next = readConsent();
      if ((consent?.analytics && !next?.analytics) || (consent?.marketing && !next?.marketing) || (consent?.media && !next?.media)) {
        clearTrackingCookies();
        location.reload(); // Unload already-executed third-party code immediately.
      } else setConsent(next);
    };
    const onStorage = (event: StorageEvent) => { if (event.key === STORAGE_KEY || event.key === null) refresh(); };
    window.addEventListener("storage", onStorage);
    const timeout = consent ? window.setTimeout(refresh, Math.min(2_147_483_647, Math.max(0, consent.savedAt + MAX_AGE - Date.now()))) : undefined;
    return () => { window.removeEventListener("storage", onStorage); window.clearTimeout(timeout); };
  }, [consent]);

  const save = (value: Choices) => {
    const next = { ...value, version: VERSION, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {
      // If a previous grant cannot be overwritten (for example, a full quota),
      // remove it so a reload cannot restore permission the visitor withdrew.
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* Storage is unavailable. */ }
    }
    const revoked = (consent?.analytics && !value.analytics) || (consent?.marketing && !value.marketing) || (consent?.media && !value.media);
    if (revoked) {
      clearTrackingCookies();
      location.reload();
      return;
    }
    setConsent(next);
    setSettingsOpen(false);
    setCustomize(false);
  };

  const openSettings = () => {
    setChoices({ analytics: consent?.analytics ?? false, marketing: consent?.marketing ?? false, media: consent?.media ?? false });
    setCustomize(true);
    setSettingsOpen(true);
  };

  return (
    <ConsentContext.Provider value={{ consent, openSettings }}>
      {children}
      {(!consent || settingsOpen) && (
        <section aria-label="Cookie preferences" className="fixed inset-x-0 bottom-0 z-[100] max-h-[85dvh] overflow-y-auto border-t border-border bg-background p-5 shadow-2xl md:p-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-lg font-semibold">Your privacy choices</h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
              We use essential storage to remember your choices. With your permission, we also use analytics to understand website usage and marketing technologies to measure advertising, plus YouTube to show product videos. Optional tracking stays off until you choose. Read our <Link className="text-primary underline" to="/privacy-policy">Privacy Policy</Link>.
            </p>
            {customize && (
              <fieldset className="my-4 space-y-3 rounded-xl border border-border p-4">
                <legend className="px-2 font-medium">Choose optional technologies</legend>
                <p className="text-sm">Essential storage: always on. Saves your cookie preference and supports requested services.</p>
                <label className="flex items-start gap-3 text-sm"><input className="mt-1 h-4 w-4" type="checkbox" checked={choices.analytics} onChange={e => setChoices({ ...choices, analytics: e.target.checked })} /><span><strong>Analytics</strong>: Google Analytics and Vercel Web Analytics help us understand visits and page usage.</span></label>
                <label className="flex items-start gap-3 text-sm"><input className="mt-1 h-4 w-4" type="checkbox" checked={choices.marketing} onChange={e => setChoices({ ...choices, marketing: e.target.checked })} /><span><strong>Marketing</strong>: Google Ads measures advertising activity. Google Tag Manager loads only when both analytics and marketing are allowed.</span></label>
                <label className="flex items-start gap-3 text-sm"><input className="mt-1 h-4 w-4" type="checkbox" checked={choices.media} onChange={e => setChoices({ ...choices, media: e.target.checked })} /><span><strong>Embedded media</strong>: YouTube hosts product videos and receives device and usage information when a video is loaded.</span></label>
              </fieldset>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => save({ analytics: false, marketing: false, media: false })}>Reject optional</Button>
              <Button variant="outline" onClick={() => save({ analytics: true, marketing: true, media: true })}>Accept all</Button>
              {customize ? <Button variant="outline" onClick={() => save(choices)}>Save preferences</Button> : <Button variant="outline" onClick={openSettings}>Customize</Button>}
              {consent && <Button variant="ghost" onClick={() => setSettingsOpen(false)}>Close</Button>}
            </div>
          </div>
        </section>
      )}
    </ConsentContext.Provider>
  );
}

export function CookieSettingsButton() {
  const { openSettings } = useCookieConsent();
  return <button type="button" onClick={openSettings} className="text-sm text-slate-300 underline underline-offset-4 hover:text-white">Cookie settings</button>;
}
