import { useEffect, useRef, useState, useCallback } from "react";

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

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleNextPicture = useCallback(() => {
    if (img === null || img + 1 === filteredList.length) return;

    const nextIndex = (img + 1) % filteredList.length;
    setImg(nextIndex);

    if (!scrollRef?.current) return;

    scrollToImage(scrollRef.current, nextIndex, 60);
  }, [img, filteredList.length, setImg]);

  const handlePreviousPicture = useCallback(() => {
    if (img === null || img === 0) return;
    const prevIndex = (img - 1 + filteredList.length) % filteredList.length;
    setImg(prevIndex);

    if (!scrollRef?.current) return;

    scrollToImage(scrollRef.current, prevIndex, 60);
  }, [img, filteredList.length, setImg]);

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    const threshold = 50;

    if (distance > threshold) handleNextPicture();
    else if (distance < -threshold) handlePreviousPicture();
  };

  const atStart = img === 0;
  const atEnd = (img ?? 0) + 1 === filteredList.length;

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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextPicture();
      } else if (e.key === "ArrowLeft") {
        handlePreviousPicture();
      } else if (e.key === "Escape") {
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleNextPicture, handlePreviousPicture, toggle]);

  return {
    scrollRef,
    currentImage,
    atStart,
    atEnd,
    handleTouchEnd,
    setTouchStartX,
    setTouchEndX,
    handleNextPicture,
    handlePreviousPicture,
  };
};
