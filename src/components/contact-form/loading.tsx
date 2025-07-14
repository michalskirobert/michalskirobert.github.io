export const Skeleton = () => {
  return (
    <form className="mt-2">
      <div className="flex flex-col animate-pulse">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="w-1/3 h-[16px] bg-gray-200"></div>
            <div className="w-full h-[35px] bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div className="w-1/3 h-[16px] bg-gray-200"></div>
            <div className="w-full h-[35px] bg-gray-200"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="w-1/12 h-[16px] bg-gray-200"></div>
          <div className="w-full h-[35px] bg-gray-200"></div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="w-1/12 h-[16px] bg-gray-200"></div>
          <div className="w-full h-[200px] bg-gray-200"></div>
        </div>
      </div>
      <div className="w-1/6 h-[35px] bg-gray-200 mt-2"></div>
    </form>
  );
};
