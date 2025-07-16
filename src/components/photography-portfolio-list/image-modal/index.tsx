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
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-hidden"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="flex flex-col h-full w-full max-w-[1200px] mx-auto relative">
        <button
          className="absolute top-2 right-5 text-yellow-400 shadow-lg cursor-pointer hover:text-yellow-300 hover:scale-110 transition duration-300 ease-in z-30"
          aria-label="Close modal"
          onClick={toggle}
        >
          <CgClose size={30} />
        </button>
        <div
          className="relative flex items-center justify-center w-full px-12"
          style={{
            height: "calc(100vh - 210px)",
          }}
        >
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 ${
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
            src={currentImage.src}
            alt={currentImage.title}
            className="h-full w-full object-contain p-5"
          />
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 ${
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
        <div className="flex flex-col bg-black bg-opacity-70 text-center w-full px-5 pt-2">
          <h3 className="truncate text-yellow-400 text-lg font-semibold mb-2">
            {currentImage.title} - {currentImage.category}
          </h3>

          <div
            ref={scrollRef}
            className="flex flex-row gap-2 w-full overflow-x-scroll overflow-y-hidden custom-scrollbar p-2"
            style={{
              marginBottom: "env(safe-area-inset-bottom, 30px)",
            }}
          >
            {filteredList.map(({ src, title }, index) => (
              <CustomImage
                key={`${title}-${index}`}
                className={`h-20 w-20 object-cover border-2 transition ${
                  img === index ? "border-yellow-400" : "border-transparent"
                }`}
                src={src}
                alt={title}
                onClick={() => setImg(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
