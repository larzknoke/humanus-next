import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Humanus – Praxis für Osteopathie und Physiotherapie Holzminden",
  description: "Humanus – Praxis für Osteopathie und Physiotherapie Holzminden, Weserbergland, Niedersachsen",
  icons: { icon: "/assets/img/favico.ico" },
};

const scripts = [
  "/assets/3rd/jquery/jquery-core.js",
  "/assets/3rd/jquery/jquery-ui.js",
  "/assets/3rd/jquery/jquery-tinynav.js",
  "/assets/3rd/jquery/jquery-isotope.js",
  "/assets/3rd/jquery/jquery-flexslider.js",
  "/assets/3rd/jquery/jquery-countdown.js",
  "/assets/3rd/jquery/jquery-masonry.js",
  "/assets/3rd/jquery/jquery-leanModal.js",
  "/assets/3rd/jquery/jquery-validate.js",
  "/assets/3rd/pretty-photo/pretty-photo.js",
  "/assets/3rd/layerslider/js/greensock.js",
  "/assets/3rd/layerslider/js/layerslider.kreaturamedia.jquery.js",
  "/assets/3rd/layerslider/js/layerslider.transitions.js",
  "/assets/js/theme.js",
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><head>
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/shortcode.css" />
    <link rel="stylesheet" href="/assets/css/woocommerce.css" />
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    <link rel="stylesheet" href="/assets/3rd/font-awesome/font-awesome.css" />
    <link rel="stylesheet" href="/assets/3rd/pretty-photo/pretty-photo.css" />
    <link rel="stylesheet" href="/assets/3rd/layerslider/css/layerslider.css" />
    {scripts.map(src => <Script key={src} src={src} strategy="beforeInteractive" />)}
  </head><body>{children}</body></html>;
}
