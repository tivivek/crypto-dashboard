import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  ComposedChart,
  CartesianGrid,
} from 'recharts';

const PriceChart = ({ priceData }) => {
  const minPrice = Math.min(...priceData.map((d) => d.price)) - 1000;
  const maxPrice = Math.max(...priceData.map((d) => d.price)) + 1000;

  const gradientId = 'priceGradient';

  return (
    <div className='relative rounded-lg p-6 h-80'>
      <ResponsiveContainer width='100%' height='100%'>
        <ComposedChart
          data={priceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#E8E7FF' stopOpacity={1} />
              <stop offset='100%' stopColor='#FFFFFF' stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray='3 3'
            stroke='#E5E7EB'
            strokeOpacity={0.6}
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey='time'
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <YAxis
            domain={[minPrice, maxPrice]}
            axisLine={false}
            tickLine={false}
            tick={false}
          />

          <Area
            type='monotone'
            dataKey='price'
            stroke='none'
            fill={`url(#${gradientId})`}
            fillOpacity={1}
          />

          <Line
            type='monotone'
            dataKey='price'
            stroke='#4B40EE'
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: '#4B40EE',
              stroke: '#4B40EE',
              strokeWidth: 2,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className='absolute top-6 right-6 bg-[#1A243A] text-white px-3 py-1.5 rounded-[4px] text-xs font-medium'>
        64,850.35
      </div>
      <div className='absolute bottom-20 right-6 bg-[#4B40EE] text-white px-3 py-1.5 rounded-[4px] text-xs font-medium'>
        63,179.71
      </div>
    </div>
  );
};

export default PriceChart;
