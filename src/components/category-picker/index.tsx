"use client";

import Image from "next/image";
import Link from "next/link";

import { useBack } from "@src/hooks/use-back";
import { FaArrowLeft } from "react-icons/fa";

import photographyOffer from "@public/photography_offer_grid.jpg";
import softwareOffer from "@public/software_offer_grid.jpg";

interface Props {
  type: "offer" | "portfolio";
}

const CategoryPicker = ({ type }: Props) => {
  const { handleBack } = useBack();
  return (
    <section className="!flex flex-col justify-center items-center my-10 p-2 min-h-[86.9vh]">
      <div className="flex flex-col items-center mb-4 w-full">
        <button
          className="flex items-center mr-auto md:ml-[29.5%] mb-5 gap-2 cursor-pointer hover:scale-110 transition-transform duration-550"
          onClick={handleBack}
        >
          <FaArrowLeft /> Back
        </button>
        <h1 className="text-center !mb-2 !text-[var(--clr-secondary)]">
          {type === "offer" ? "Offers" : "Portfolio"}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Link href={`/${type}/photography`}>
          <Image
            className="!w-full !max-h-[300px] object-cover shadow-bs"
            src={photographyOffer}
            alt={type}
            width={0}
            height={0}
          />
        </Link>
        <Link href={`/${type}/software`}>
          <Image
            className="!w-full !max-h-[300px] object-cover shadow-bs"
            src={softwareOffer}
            alt={type}
            width={0}
            height={0}
          />
        </Link>
      </div>
    </section>
  );
};

export default CategoryPicker;
