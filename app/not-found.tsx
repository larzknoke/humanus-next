import Link from "next/link";
export default function NotFound() { return <section className="not-found"><p className="eyebrow">404</p><h1>Seite nicht gefunden</h1><p>Die gewünschte Seite ist nicht verfügbar.</p><Link className="button" href="/">Zur Startseite</Link></section>; }
