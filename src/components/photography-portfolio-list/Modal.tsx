import { StaticImageData } from "next/image";
import { CustomImage } from "../shared/image";
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Props {
  src: StaticImageData;
  title: string;
  category: string;
  isOpen: boolean;
  toggle: () => void;
}

export const Modal = ({ isOpen, category, src, title, toggle }: Props) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggle();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  return (
    <div
      className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-black/70 backdrop-blur-sm z-10"
      onClick={toggle}
    >
      <div className="relative flex flex-col my-auto mx-auto items-center justify-center h-[100vh]">
        <button
          className="absolute top-2 right-5 text-[var(--clr-accent)] shadow-2xl cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
          aria-label="Close modal"
        >
          <CgClose size={40} />
        </button>
        <button>
          <FaChevronLeft
            size={60}
            className="absolute left-0 top-[50%] text-[var(--clr-accent)] cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
            onClick={toggle}
            aria-label="Go back"
          />
        </button>
        <CustomImage
          {...{
            src,
            alt: title,
            className: "h-full w-full p-5 shadow-2xl object-contain",
          }}
        />
        <button>
          <FaChevronRight
            size={60}
            className="absolute right-0 top-[50%] text-[var(--clr-accent)] cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
            aria-label="Go forward"
          />
        </button>
      </div>
    </div>
  );
};
