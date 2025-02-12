import { useSearchParams, useParams } from "react-router-dom";
import { UseWeatherQuery, UseForecastQuery } from "@/hooks/UseWeather";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import WeatherSkeleton from "@/components/loading-skeleton";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyTemperature from "@/components/HourlyTemperature";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForcastDetails from "@/components/WeatherForcastDetails";
import { FavoriteButton } from "@/components/favouriteButton";
function CityPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = UseWeatherQuery(coordinates);
  const forcastQuery = UseForecastQuery(coordinates);

  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please Try Again</p>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forcastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {params.cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div className="flex gap-2">
          <FavoriteButton
            data={{ ...weatherQuery.data, name: params.cityName }}
          />
        </div>
      </div>

      <div className="grid gap-6">
        <CurrentWeather data={weatherQuery.data} />
        <HourlyTemperature data={forcastQuery.data} />
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForcastDetails data={forcastQuery.data} />
        </div>
      </div>
    </div>
  );
}

export default CityPage;
