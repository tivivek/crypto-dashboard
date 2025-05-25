import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage('crypto-favorites', []);

  const addToFavorites = (symbol) => {
    setFavorites((prev) => [...new Set([...prev, symbol])]);
  };

  const removeFromFavorites = (symbol) => {
    setFavorites((prev) => prev.filter((fav) => fav !== symbol));
  };

  const isFavorite = (symbol) => {
    return favorites.includes(symbol);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
};
