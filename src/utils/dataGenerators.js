import { TIMEFRAME_CONFIG } from './constants';

export const generatePriceData = (timeframe, basePrice = 63179.71) => {
  const config = TIMEFRAME_CONFIG[timeframe] || TIMEFRAME_CONFIG['1w'];
  const dataPoints = 50;
  const data = [];

  for (let i = 0; i < dataPoints; i++) {
    const variation = (Math.random() - 0.5) * 5000;
    const trend = Math.sin(i * 0.3) * 2000;
    const price = basePrice + variation + trend;

    data.push({
      time: i,
      price: Math.max(price, 45000),
      value: Math.max(price, 45000),
      timestamp: Date.now() - (dataPoints - i) * 3600000,
    });
  }

  return data;
};

export const generateVolumeData = (length = 80) => {
  return Array.from({ length }, (_, i) => {
    // Create varied volume heights to match Figma pattern
    const baseHeight = 30 + Math.random() * 40;
    const variation = Math.sin(i * 0.2) * 15;
    const randomVariation = (Math.random() - 0.5) * 20;

    return {
      time: i,
      volume: Math.random() * 1000000 + 500000,
      height: Math.max(baseHeight + variation + randomVariation, 10),
    };
  });
};

export const calculatePriceChange = (priceData) => {
  if (priceData.length < 2) return { change: 0, percentage: 0 };

  const currentPrice = priceData[priceData.length - 1].price;
  const previousPrice = priceData[0].price;
  const change = currentPrice - previousPrice;
  const percentage = (change / previousPrice) * 100;

  return { change, percentage };
};
