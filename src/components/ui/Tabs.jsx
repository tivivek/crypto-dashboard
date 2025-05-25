import { clsx } from 'clsx';

const Tabs = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={clsx('border-b border-gray-200', className)}>
      <nav className='flex space-x-8'>
        {tabs.map((tab) => (
          <button
            key={tab.id || tab}
            onClick={() => onTabChange(tab.id || tab)}
            className={clsx(
              'py-4 px-1 border-b-2 font-medium text-sm transition-colors',
              activeTab === (tab.id || tab)
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {tab.label || tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
