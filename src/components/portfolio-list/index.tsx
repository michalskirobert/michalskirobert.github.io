"use client";

import Link from "next/link";
import Image from "next/image";

import { portfolioList } from "./utils";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

const PortfolioList = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {portfolioList.map(({ technologies, title, src, url, repoUrl }) => (
        <div
          key={title}
          className="flex flex-col w-full md:w-[200px] h-auto shadow-lg gap-2"
        >
          <Image
            {...{
              src,
              height: 0,
              width: 0,
              alt: title,
              className:
                "w-full h-[150px] shadow-sm object-cover hover:scale-110 transition-transform duration-550",
            }}
          />
          <div className="px-2 pb-2">
            <h2 className="!text-sm !font-extrabold">{title}</h2>
            <p className="text-sm font-[500]">{technologies.join(", ")}</p>
            <div className="flex justify-between mt-3">
              <Link
                className="!text-[var(--clr-secondary)] !text-2xl"
                href={repoUrl || ""}
                title={
                  repoUrl ? "GitHub repository" : "Repository URL is not shared"
                }
              >
                <FaGithub
                  className={
                    !repoUrl
                      ? "text-gray-400 cursor-not-allowed pointer-none:"
                      : ""
                  }
                />
              </Link>
              <Link
                className="!text-[var(--clr-secondary)] !text-2xl"
                href={url}
                target="_blank"
                title="View live site"
              >
                <MdPreview />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
