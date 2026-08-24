"use client";

import { useEffect } from "react";

type JQueryResult = { layerSlider?: (options: object) => void; hasClass?: (name: string) => boolean };
type JQueryLike = ((selector: string | Element) => JQueryResult) & { fn?: { layerSlider?: unknown } };
declare global { interface Window { jQuery?: JQueryLike } }

export function LegacyEnhancer({ home }: { home: boolean }) {
  useEffect(() => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      const $ = window.jQuery;
      if (!$) { if (++attempts > 100) window.clearInterval(timer); return; }
      if (home && $.fn?.layerSlider) {
        const slider = $("#layerslider");
        if (!slider.hasClass?.("ls-container")) slider.layerSlider?.({ responsive: false, responsiveUnder: 1100, layersContainer: 1100, skin: "v5", hoverPrevNext: false, skinsPath: "/assets/3rd/layerslider/skins/" });
      }
      const video = document.querySelector<HTMLVideoElement>("#player");
      document.querySelector("#play")?.addEventListener("click", () => void video?.play());
      document.querySelector("#pause")?.addEventListener("click", () => video?.pause());
      document.querySelector("#duration")?.addEventListener("click", () => { const output = document.querySelector("#ausgabe"); if (output && video) output.textContent = `Die Dauer des Videos beträgt: ${video.duration} Sekunden.`; });
      window.clearInterval(timer);
    }, 50);
    return () => window.clearInterval(timer);
  }, [home]);
  return null;
}
