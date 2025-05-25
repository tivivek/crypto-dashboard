import { useLocalStorage } from './useLocalStorage';

export const useUserPreferences = () => {
  const [preferences, setPreferences] = useLocalStorage('user-preferences', {
    theme: 'light',
    currency: 'USD',
    language: 'en',
    notifications: true,
    defaultTimeframe: '1w',
  });

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    preferences,
    updatePreference,
  };
};
