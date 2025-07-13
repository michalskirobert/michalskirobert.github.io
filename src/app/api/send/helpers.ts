import fs from "fs";
import path from "path";

export function renderTemplate(template: string, data: Record<string, string>) {
  let output = template;
  for (const [key, value] of Object.entries(data)) {
    output = output.replaceAll(`#${key}`, value);
  }
  return output;
}

const generatePath = (fileName: string) =>
  path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "send",
    "templates",
    `${fileName}.html`
  );

export const readHtmlTemplate = (fileName: string) =>
  fs.readFileSync(generatePath(fileName), "utf-8");
