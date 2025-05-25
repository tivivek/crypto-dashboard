import { formatPrice } from '../../utils/formatters';

const PriceDisplay = ({ currentPrice, priceChange, percentChange }) => {
  const isPositive = priceChange >= 0;

  return (
    <div className='px-8 pt-8 pb-6'>
      <div className='flex items-start gap-2 mb-2'>
        <span className='text-5xl font-bold text-gray-900'>
          {formatPrice(currentPrice)}
        </span>
        <span className='text-2xl text-gray-400 font-medium'>USD</span>
      </div>
      <div
        className={`text-lg font-medium ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {isPositive ? '+' : '-'} {formatPrice(Math.abs(priceChange))} (
        {Math.abs(percentChange).toFixed(2)}%)
      </div>
    </div>
  );
};

export default PriceDisplay;
