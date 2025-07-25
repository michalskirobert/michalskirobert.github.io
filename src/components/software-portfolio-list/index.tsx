"use client";

import Link from "next/link";

import { SoftwarePortfolioItem } from "./utils";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { CustomImage } from "@shared/image";
import { ROUTER_PATHS } from "@src/utils/constants";

interface Props {
  portfolioList: SoftwarePortfolioItem[];
}

const PortfolioList = ({ portfolioList }: Props) => {
  return (
    <div>
      <h4 className="text-sm font-medium mt-2 pb-2 border-b-1 border-black/20">
        Enjoyed the portfolio? Take a look at my{" "}
        <Link href={ROUTER_PATHS.OFFER_SOFTWARE} className="!text-sm">
          full offer
        </Link>
        .
      </h4>
      <div className="flex flex-wrap gap-3 mt-5">
        {portfolioList.map(
          ({ technologies, title, src, previewUrl, repoUrl }) => (
            <div
              key={title}
              className="flex flex-col w-full md:w-[200px] h-auto shadow-lg gap-2"
            >
              <CustomImage
                {...{
                  src,
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
                      repoUrl
                        ? "GitHub repository"
                        : "Repository URL is not shared"
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
                    href={previewUrl || ""}
                    target="_blank"
                    title="View live site"
                  >
                    <MdPreview />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioList;
