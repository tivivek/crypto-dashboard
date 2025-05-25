import { useState } from 'react';
import PriceDisplay from './PriceDisplay';
import ChartSection from '../Chart/ChartSection';
import { usePriceData } from '../../hooks/usePriceData';
import { TABS, TIMEFRAMES } from '../../utils/constants';
import NavigationTabs from './NavigationTab';

const CryptoDashboard = () => {
  const [activeTab, setActiveTab] = useState('Chart');
  const [activeTimeframe, setActiveTimeframe] = useState('1w');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { priceData, currentPrice, priceChange, percentChange } =
    usePriceData(activeTimeframe);

  return (
    <div className='w-full max-w-6xl mx-auto bg-white'>
      <PriceDisplay
        currentPrice={currentPrice}
        priceChange={priceChange}
        percentChange={percentChange}
      />

      <NavigationTabs
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 'Chart' && (
        <ChartSection
          priceData={priceData}
          activeTimeframe={activeTimeframe}
          onTimeframeChange={setActiveTimeframe}
          timeframes={TIMEFRAMES}
          isFullscreen={isFullscreen}
          onFullscreenToggle={() => setIsFullscreen(!isFullscreen)}
        />
      )}

      {activeTab === 'Summary' && (
        <div className='px-8 py-12 text-center text-gray-500'>
          Summary content coming soon...
        </div>
      )}

      {activeTab === 'Statistics' && (
        <div className='px-8 py-12 text-center text-gray-500'>
          Statistics content coming soon...
        </div>
      )}

      {activeTab === 'Analysis' && (
        <div className='px-8 py-12 text-center text-gray-500'>
          Analysis content coming soon...
        </div>
      )}

      {activeTab === 'Settings' && (
        <div className='px-8 py-12 text-center text-gray-500'>
          Settings content coming soon...
        </div>
      )}
    </div>
  );
};

export default CryptoDashboard;
