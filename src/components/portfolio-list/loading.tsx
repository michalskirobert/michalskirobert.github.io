export const PortfolioListSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {[1, 2, 3].map((order) => (
        <div
          key={`portfolio-${order}`}
          className="flex flex-col w-full md:w-[200px] h-auto shadow-lg gap-2  animate-pulse"
        >
          <div className="w-full h-[150px] bg-gray-200"></div>
          <div className="px-2 pb-2">
            <h2 className="w-[150px] h-[12px] bg-gray-200"></h2>
            <p className="text-sm font-[500] w-[150px] h-[12px] bg-gray-200 mt-1"></p>
            {/* <div className="flex justify-between mt-3">
              <div className="size-6 rounded-full bg-gray-200"></div>
              <div className="size-6 rounded-full bg-gray-200"></div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
