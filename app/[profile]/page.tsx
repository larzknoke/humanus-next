import { notFound } from "next/navigation";
import { LegacyPage } from "../legacy";

const profiles = ["kilianbegoin", "joachimtoelle", "dominiquemakris", "georgroeske"] as const;
export function generateStaticParams() { return profiles.map(profile => ({ profile })); }
export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ profile: string }> }) {
  const { profile } = await params;
  if (!profiles.includes(profile as (typeof profiles)[number])) notFound();
  return <LegacyPage source={`${profile}.html`} />;
}
