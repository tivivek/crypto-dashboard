const Container = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${className}`}>
      <div className='container mx-auto px-4'>{children}</div>
    </div>
  );
};

export default Container;
