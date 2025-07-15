import { useEffect, useRef } from "react";
import { ImageModalProps } from ".";
import { scrollToImage } from "./utils";

export const useImageModalService = ({
  filteredList,
  img,
  isOpen,
  setImg,
  toggle,
}: ImageModalProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const currentImage = filteredList[img || 0];

  const handleNextPicture = () => {
    if (img === null || img + 1 === filteredList.length) return;

    const nextIndex = (img + 1) % filteredList.length;
    setImg(nextIndex);

    if (!scrollRef?.current) return;

    scrollToImage(scrollRef.current, nextIndex, 60);
  };

  const handlePreviousPicture = () => {
    if (img === null || img === 0) return;
    const prevIndex = (img - 1 + filteredList.length) % filteredList.length;
    setImg(prevIndex);

    if (!scrollRef?.current) return;

    scrollToImage(scrollRef.current, prevIndex, 60);
  };

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

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;
      if (e.deltaY === 0) return;

      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return {
    scrollRef,
    currentImage,
    handleNextPicture,
    handlePreviousPicture,
    scrollToImage,
  };
};
