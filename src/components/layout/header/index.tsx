"use client";

import { useEffect, useState } from "react";
import { appLinks, terminalContent } from "./utils";

import { FaTerminal } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [terminal, setTerminal] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentText = terminalContent[index];
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (i < currentText.length) {
        setTerminal(currentText.substring(0, i + 1));
        i++;
        timeout = setTimeout(typeWriter, 120);
      } else {
        setTimeout(() => {
          if (index === terminalContent.length - 1) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }, 1500);
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <header className="!flex justify-between items-center !p-4 fixed w-full !bg-[var(--clr-light)] h-[35px] shadow z-10">
      <div className="flex items-center w-[300px]">
        <FaTerminal className="mr-1" />
        <p className="!text-[0.9rem] font-secondary text-[var(--clr-dark)] font-[var(--fw-bold)] transition-colors overflow-hidden">
          {terminal}
        </p>
      </div>
      <button
        aria-label="Toggle navigation"
        className="relative z-20 hover:text-[var(--clr-accent)] transition hover:scale-110 duration-500 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <MdClose className={"text-4xl text-[var(--clr-accent)] shadow"} />
        ) : (
          <GiHamburgerMenu className="text-3xl text-[var(--crl-dark)] shadow" />
        )}
      </button>
      <nav
        className={`
    fixed inset-0 !h-[100vh]
    !bg-[var(--clr-dark)] text-[var(--clr-light)]
    !bg-[url("/assets/batik.png")]
    transition-transform duration-500 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <ul className="list-none flex h-full flex-col justify-evenly items-center m-0 p-0">
          {appLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                {...{
                  href,
                  onClick: () => setOpen(false),
                  className:
                    "font-secondary !font-[var(--fw-bold)] !text-5xl hover:text-[var(--clr-accent)] transition-color duration-500 !text-shadow-xs !no-underline",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
