import PriceChart from './PriceChart';
import VolumeChart from './VolumeChart';
import ChartControls from './ChartControls';

const ChartSection = ({
  priceData,
  activeTimeframe,
  onTimeframeChange,
  timeframes,
  isFullscreen,
  onFullscreenToggle,
}) => {
  return (
    <div className='px-8'>
      <ChartControls
        activeTimeframe={activeTimeframe}
        onTimeframeChange={onTimeframeChange}
        timeframes={timeframes}
        isFullscreen={isFullscreen}
        onFullscreenToggle={onFullscreenToggle}
      />
      <div className='border border-[#E2E4E7] w-full'>
        <PriceChart priceData={priceData} />

        <VolumeChart />
      </div>
    </div>
  );
};

export default ChartSection;
