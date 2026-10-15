import { useCookieConsent } from "./CookieConsent";
import { Button } from "./ui/button";

export function ConsentVideo() {
  const { consent, openSettings } = useCookieConsent();
  if (!consent?.media) return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="max-w-lg text-sm text-muted-foreground">This product video is hosted by YouTube. Enable embedded media in Cookie settings to load it. YouTube will receive information about your visit.</p>
      <Button variant="outline" onClick={openSettings}>Video privacy settings</Button>
    </div>
  );
  return <iframe src="https://www.youtube-nocookie.com/embed/Jg7ilCidBu0" title="Observeri AI Risk Operations Center product overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute inset-0 h-full w-full border-0" />;
}
