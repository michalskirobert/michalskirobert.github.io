import { CustomImage } from "@shared/image";
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

export const ImageModal = ({
  isOpen,
  filteredList,
  img,
  setImg,
  toggle,
}: ImageModalProps) => {
  const {
    currentImage,
    scrollRef,
    atStart,
    atEnd,
    handleTouchEnd,
    setTouchEndX,
    setTouchStartX,
    handleNextPicture,
    handlePreviousPicture,
  } = useImageModalService({ filteredList, img, isOpen, setImg, toggle });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-hidden"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex flex-col h-full w-full max-w-[1200px] mx-auto relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-5 text-yellow-400 hover:text-yellow-300 hover:scale-110 transition z-30"
          aria-label="Close modal"
          onClick={toggle}
        >
          <CgClose size={30} />
        </button>

        {/* Main image view */}
        <div
          className="relative flex items-center justify-center w-full px-12"
          style={{ height: "calc(100vh - 210px)" }}
        >
          {!atStart && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-yellow-400 hover:text-yellow-300 transition"
              onClick={handlePreviousPicture}
              aria-label="Go back"
            >
              <FaChevronLeft size={40} />
            </button>
          )}

          <CustomImage
            src={currentImage.src}
            alt={currentImage.title}
            className="h-full w-full object-contain p-5"
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          />

          {!atEnd && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-yellow-400 hover:text-yellow-300 transition"
              onClick={handleNextPicture}
              aria-label="Go forward"
            >
              <FaChevronRight size={40} />
            </button>
          )}
        </div>

        {/* Image title */}
        <div className="flex flex-col bg-black bg-opacity-70 text-center w-full px-5 pt-2">
          <h3 className="truncate text-yellow-400 text-lg font-semibold mb-2">
            {currentImage.title} - {currentImage.category}
          </h3>

          {/* Thumbnails */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-scroll custom-scrollbar p-2"
            style={{ marginBottom: "env(safe-area-inset-bottom, 30px)" }}
          >
            {filteredList.map(({ src, title }, index) => (
              <CustomImage
                key={`${title}-${index}`}
                src={src}
                alt={title}
                onClick={() => setImg(index)}
                className={`h-20 w-20 object-cover border-2 transition ${
                  img === index ? "border-yellow-400" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
