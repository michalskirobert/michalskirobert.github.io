"use client";

import { useState } from "react";
import { FILTER, FilterType, PhotographyPortfolioItem } from "./utils";
import { CustomImage } from "@shared/image";
import { ImageModal } from "./image-modal";

interface Props {
  portfolioList: PhotographyPortfolioItem[];
}

const PortfolioList = ({ portfolioList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState<number | null>(null);

  const toggle = () => {
    if (img) {
      setImg(null);
    }

    setIsOpen(!isOpen);
  };

  const [category, setCategory] = useState<FilterType>("Potraits");

  const filteredList = portfolioList.filter(
    (item) => item.category === category
  );

  return (
    <div className="relative flex flex-wrap gap-3 mt-5">
      <div className="inline-flex w-full divide-x divide-amber-400 rounded bg-[var(--clr-accent)] shadow-sm transition-colors duration-500 ease-out">
        {Object.values(FILTER).map((filter) => (
          <button
            key={filter}
            type="button"
            className={`px-3 py-1.5 text-sm text-[var(--clr-secondary)] font-medium transition-colors ${
              category === filter ? "bg-amber-200" : "bg-[var(--clr-accent)]"
            } hover:bg-amber-200  hover:text-gray-900 focus:relative`}
            onClick={() => setCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      {filteredList.map(({ title, src, category }, i) => (
        <div
          key={`${title}-${i}`}
          className="relative flex flex-col w-full md:w-[200px] h-auto shadow-lg gap-2  hover:scale-110 transition-transform duration-550 cursor-pointer"
          onClick={() => {
            toggle();
            setImg(i);
          }}
        >
          <CustomImage
            {...{
              src,
              alt: title,
              className: "w-full h-[150px] shadow-sm object-cover",
            }}
          />
          <div className="flex items-center justify-center absolute bottom-0 w-full h-1/5 bg-black/50 px-2">
            <h2
              className="!text-sm truncate  !font-extrabold !text-[var(--clr-primary)] cursor-help"
              title={title}
            >
              {category} - {title}
            </h2>
          </div>
        </div>
      ))}
      <ImageModal {...{ img, filteredList, isOpen, toggle, setImg }} />
    </div>
  );
};

export default PortfolioList;
