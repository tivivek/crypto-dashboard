import { useState, useEffect } from 'react';
import {
  generatePriceData,
  calculatePriceChange,
} from '../utils/dataGenerators';

export const usePriceData = (timeframe) => {
  const [priceData, setPriceData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(63179.71);
  const [priceChange, setPriceChange] = useState(2161.42);
  const [percentChange, setPercentChange] = useState(3.54);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPriceData = async () => {
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const newPriceData = generatePriceData(timeframe);
        const { change, percentage } = calculatePriceChange(newPriceData);

        setPriceData(newPriceData);

        if (newPriceData.length > 0) {
          const latestPrice = newPriceData[newPriceData.length - 1].price;
          setCurrentPrice(latestPrice);
          setPriceChange(Math.abs(change));
          setPercentChange(Math.abs(percentage));
        }
      } catch (error) {
        console.error('Error fetching price data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPriceData();
  }, [timeframe]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice((prev) => {
        const variation = (Math.random() - 0.5) * 100;
        return Math.max(prev + variation, 45000);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    priceData,
    currentPrice,
    priceChange,
    percentChange,
    isLoading,
  };
};
