import { ROUTER_PATHS } from "@utils/constants";

export const appLinks: { label: string; href: string }[] = [
  { label: "Home", href: ROUTER_PATHS.HOME },
  { label: "Portfolio", href: ROUTER_PATHS.PORTFOLIO },
  { label: "About", href: ROUTER_PATHS.ABOUT_ME },
  { label: "Contact", href: ROUTER_PATHS.CONTACT },
];

export const terminalContent = [
  "git push origin dev",
  "git commit -m 'お疲れ'",
  "yarn add -D '@dev/nurbyte'",
  "git checkout 'ポーランド男児'",
  "git merge dev/r_michalski",
  "",
];
