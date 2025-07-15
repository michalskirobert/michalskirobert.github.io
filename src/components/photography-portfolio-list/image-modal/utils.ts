export const isElementInViewport = (
  element: HTMLDivElement,
  container: HTMLElement
): boolean => {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return (
    elementRect.left >= containerRect.left &&
    elementRect.right <= containerRect.right
  );
};

export const scrollToImage = (
  container: HTMLDivElement | null,
  stepIndex: number,
  offset?: number
): void => {
  if (!container) return;

  const stepElement = container.children.item(
    stepIndex
  ) as HTMLDivElement | null;

  if (stepElement) {
    container.scrollLeft += offset ?? stepElement.clientWidth ?? 60;

    if (!isElementInViewport(stepElement, container)) {
      stepElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
};
