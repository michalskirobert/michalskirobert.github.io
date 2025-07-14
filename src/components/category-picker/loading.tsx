export const Skeleton = () => {
  return (
    <section className="!flex flex-col gap-4 p-4 animate-pulse my-10 min-h-[65.9vh]">
      <div className="h-[var(--fs-h1)] w-50 bg-gray-200 mx-auto"></div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <div className="w-full max-w-sm h-[300px] bg-gray-200"></div>
        <div className="w-full max-w-sm h-[300px] bg-gray-200"></div>
      </div>
    </section>
  );
};
