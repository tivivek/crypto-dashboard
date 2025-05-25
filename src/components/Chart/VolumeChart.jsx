import { generateVolumeData } from '../../utils/dataGenerators';

const VolumeChart = () => {
  const volumeData = generateVolumeData(80);

  return (
    <div className='mt-4 h-20 bg-transparent rounded-lg flex items-end justify-center px-2 py-2 w-full'>
      {volumeData.map((item, index) => (
        <div
          key={index}
          className='bg-[#E8E7FF] hover:bg-[#D1D0FF] transition-colors duration-200 mx-px rounded-t-[1px]'
          style={{
            height: `${Math.max(item.height * 0.8, 15)}%`,
            width: '3px',
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default VolumeChart;
