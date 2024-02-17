const Shimmer = () => {
  return (
    <div className="Shimmer-container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="Shimmer-cards bg-white p- rounded-lg">
          <div className="animate-pulse flex flex-col items-center justify-center space-y-4">
            {/* Modified square placeholder */}
            <div className="w-32 h-32 bg-gradient-to-b from-gray-300 to-gray-200 rounded-md"></div>
            <div className="w-full h-4 bg-gradient-to-b from-gray-300 to-gray-200 rounded"></div>
            <div className="w-full h-4 bg-gradient-to-b from-gray-300 to-gray-200 rounded"></div>
            <div className="w-full h-4 bg-gradient-to-b from-gray-300 to-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
