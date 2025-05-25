const Loading = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizes[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;
