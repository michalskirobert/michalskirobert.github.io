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
  const { currentImage, scrollRef, handleNextPicture, handlePreviousPicture } =
    useImageModalService({ filteredList, img, isOpen, setImg, toggle });
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-black/70 backdrop-blur-sm z-10">
      <div className="relative flex flex-col my-auto mx-auto items-center justify-between h-full w-full max-w-[1200px]">
        <button
          className="absolute top-2 right-5 text-yellow-400 shadow-lg cursor-pointer hover:text-yellow-300 hover:scale-110 transition duration-300 ease-in z-30"
          aria-label="Close modal"
          onClick={toggle}
        >
          <CgClose size={30} />
        </button>

        <div className="relative flex flex-col items-center justify-center w-full max-h-[72vh] flex-grow">
          {/* Prev img */}
          <button
            className={`absolute left-0 lg:left-45 top-1/2 transform -translate-y-1/2 z-20 rounded-full ${
              img === 0
                ? "hidden"
                : "text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-300 ease-in"
            }`}
            onClick={handlePreviousPicture}
            aria-label="Go back"
          >
            <FaChevronLeft size={40} />
          </button>

          <CustomImage
            {...{
              src: currentImage.src,
              alt: currentImage.title,
              className: "max-h-[70vh] md:!h-[100vh] w-auto object-contain p-5",
            }}
          />

          {/* Next img */}
          <button
            className={`absolute text-sm right-0 lg:right-45 top-1/2 transform -translate-y-1/2 z-20 ${
              (img || 0) + 1 === filteredList.length
                ? "hidden"
                : "text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-300 ease-in"
            }`}
            onClick={handleNextPicture}
            aria-label="Go forward"
          >
            <FaChevronRight size={40} />
          </button>
        </div>

        {/* Title*/}
        <div className="w-full bg-black bg-opacity-70 text-center py-3 px-5 mt-2 rounded-md shadow-lg">
          <h3 className="truncate text-yellow-400 text-lg font-semibold">
            {currentImage.title} - {currentImage.category}
          </h3>
        </div>

        {/* Carousel*/}
        <div
          ref={scrollRef}
          style={{ maxHeight: "calc(72vh - env(safe-area-inset-bottom))" }}
          className="flex flex-row gap-2 mt-2 w-full overflow-x-scroll overflow-y-hidden custom-scrollbar p-2 pb-[env(safe-area-inset-bottom)]"
        >
          {filteredList.map(({ src, title }, index) => (
            <CustomImage
              key={`${title}-${index}`}
              {...{
                className: `h-20 w-20 object-cover border-2 transition ${
                  img === index ? "border-yellow-400" : "border-transparent"
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
