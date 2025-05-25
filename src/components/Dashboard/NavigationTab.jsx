const NavigationTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className='px-8 mb-6'>
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? 'text-[#1A243A] border-b-2 border-blue-600'
                : 'text-[#6F7177] hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
