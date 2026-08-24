import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegacyEnhancer } from "./legacy-enhancer";

function getPageContent(source: string) {
  return readFileSync(join(process.cwd(), "app/content", source), "utf8");
}

export function LegacyPage({ source, home = false }: { source: string; home?: boolean }) {
  return <><div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: getPageContent(source) }} /><LegacyEnhancer home={home} /></>;
}
