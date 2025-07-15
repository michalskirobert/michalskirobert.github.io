import { CustomImage } from "../../shared/image";
import { CgClose } from "react-icons/cg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PhotographyPortfolioItem } from "../utils";
import { useImageModalService } from "./service";

export interface ImageModalProps {
  img: number | null;
  filteredList: PhotographyPortfolioItem[];
  isOpen: boolean;
  setImg: (index: number | null) => void;
  toggle: () => void;
}

export const Modal = ({
  isOpen,
  filteredList,
  img,
  setImg,
  toggle,
}: ImageModalProps) => {
  const {
    currentImage,
    scrollRef,
    scrollToImage,
    handleNextPicture,
    handlePreviousPicture,
  } = useImageModalService({ filteredList, img, isOpen, setImg, toggle });
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-black/70 backdrop-blur-sm z-10">
      <div className="relative flex flex-col my-auto mx-auto items-center justify-center h-[100vh]">
        <button
          className="absolute top-2 right-5 text-[var(--clr-accent)] shadow-2xl cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
          aria-label="Close modal"
        >
          <CgClose size={40} />
        </button>
        <div className="relative flex flex-col items-center justify-center w-full h-[75%]">
          <button>
            <FaChevronLeft
              size={60}
              className="absolute left-0 -bottom-22 text-[var(--clr-accent)] cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
              onClick={handlePreviousPicture}
              aria-label="Go back"
            />
          </button>
          <CustomImage
            {...{
              src: currentImage.src,
              alt: currentImage.title,
              className: "h-full w-full p-5 shadow-2xl object-contain",
            }}
          />
          <button onClick={handleNextPicture}>
            <FaChevronRight
              size={60}
              className="absolute right-0 -bottom-22 text-[var(--clr-accent)] cursor-pointer hover:text-amber-200 hover:scale-110 transition duration-500 ease-in"
              aria-label="Go forward"
            />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex flex-row gap-2 mt-5 w-2/3 overflow-x-scroll overflow-y-hidden overscroll-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredList.map(({ src, title }, index) => (
            <CustomImage
              key={`${title}-${index}`}
              {...{
                className: `h-20 w-20 object-cover ${
                  img === index ? "border-2 border-amber-200 scale-120" : ""
                }`,
                src,
                alt: title,
                onClick: () => setImg(index),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
