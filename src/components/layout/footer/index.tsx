import Link from "next/link";
import { links } from "./utils";

export default function Footer() {
  return (
    <footer className="!flex gap-1 flex-col items-center !bg-[var(--clr-secondary)] !bg-[url(/assets/batik.png)] w-full h-min-[200px] !py-5 !text-shadow-lg">
      <div className="!flex gap-2">
        {links.map(({ Icon, href }, i) => (
          <Link key={i} {...{ href, target: "_blank" }}>
            <Icon className="!text-5xl !shadow-2xl" />
          </Link>
        ))}
      </div>
      <div className="!shadow-2xl !font-bold text-[var(--clr-primary)] text-center">
        <p className="!text-sm">© 2025 Robert Michalski.</p>
        <p className="!text-xs">All rights reserved.</p>
        <p className="!text-xs">NIP: 7511792856</p>
      </div>
    </footer>
  );
}
