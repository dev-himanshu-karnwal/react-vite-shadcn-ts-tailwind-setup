export const API_CONFIG = {
  BASE_URL: "http://api.openweathermap.org/data/2.5",
  GEOCODING_API: "http://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_KEY,
  },
};

//create url mai dekho set kr rkhi h weather.tsx
