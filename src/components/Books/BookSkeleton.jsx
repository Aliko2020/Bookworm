function SkeletonCard() {
    return (
      <article className="flex gap-4 w-full sm:max-w-sm border rounded-md p-2 animate-pulse">
        <div className="min-w-32 bg-gray-300 rounded-md h-48"></div>
        <div className="flex min-w-24 flex-col justify-between flex-1">
          <div className="h-2 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-1 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-1 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-1 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-1 bg-gray-300 rounded-md mb-2"></div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-32 bg-gray-300 rounded-md "></div>
            
          </div>
        </div>
      </article>
    );
  }
export default SkeletonCard;  