import Button from '../ui/Button';
import FullscreenIcon from '../../assets/FullscreenIcon';
import CompareIcon from '../../assets/CompareIcon';

const ChartControls = ({
  activeTimeframe,
  onTimeframeChange,
  timeframes,
  isFullscreen,
  onFullscreenToggle,
}) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className='flex items-center gap-4'>
        <Button
          variant='ghost'
          onClick={onFullscreenToggle}
          className='flex items-center gap-2 text-[#6F7177] hover:text-gray-800 text-sm'
        >
          <FullscreenIcon />
          Fullscreen
        </Button>
        <Button
          variant='ghost'
          className='flex items-center gap-2 text-[#6F7177] hover:text-gray-800 text-sm'
        >
          <CompareIcon />
          Compare
        </Button>
      </div>

      <div className='flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1'>
        {timeframes.map((timeframe) => (
          <Button
            key={timeframe}
            variant={activeTimeframe === timeframe ? 'primary' : 'ghost'}
            size='sm'
            onClick={() => onTimeframeChange(timeframe)}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              activeTimeframe === timeframe
                ? 'bg-[#4B40EE] text-white'
                : 'text-[#6F7177] hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {timeframe}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChartControls;
