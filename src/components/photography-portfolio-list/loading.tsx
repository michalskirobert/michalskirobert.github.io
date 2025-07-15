export const PortfolioListSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {[1, 2, 3].map((order) => (
        <div
          key={`portfolio-${order}`}
          className="flex flex-col w-full md:w-[200px] h-auto shadow-lg gap-2  animate-pulse"
        >
          <div className="w-full h-[150px] bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
};
