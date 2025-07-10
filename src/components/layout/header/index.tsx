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
    let currentText = terminalContent[index];
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
    <header className="!flex justify-between items-center !p-4 fixed w-full !bg-[var(--clr-light)] h-[35px] shadow">
      <div className="flex items-center w-[300px]">
        <FaTerminal />
        <p className="text-[1.3rem] font-secondary text-[var(--clr-dark)] font-[var(--fw-bold)] transition-colors overflow-hidden">
          {terminal}
        </p>
      </div>
      <button
        aria-label="Hamburger"
        className={`relative z-20 !text-[var(${
          open ? "--clr-light" : "--clr-dark"
        })]`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <MdClose className="text-4xl" />
        ) : (
          <GiHamburgerMenu className="text-3xl" />
        )}
      </button>
      {open && (
        <nav className="fixed !bg-[var(--clr-dark)] text-[var(--clr-light)] top-0 bottom-0 left-0 right-0 transition-transform z-10">
          <ul className="list-none flex h-[100%] flex-col justify-evenly items-center m-0 p-0">
            {appLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  {...{
                    href,
                    className: "!font-[var(--fw-bold)] !text-3xl",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
