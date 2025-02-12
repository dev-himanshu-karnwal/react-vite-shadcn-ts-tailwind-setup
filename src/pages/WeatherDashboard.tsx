import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw } from "lucide-react";
import { UseGeolocation } from "@/hooks/Use_Geolocation";
import WeatherSkeleton from "@/components/loading-skeleton";
import { AlertTriangle } from "lucide-react";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherForcastDetails from "@/components/WeatherForcastDetails";
import WeatherDetails from "@/components/WeatherDetails";
import HourlyTemperature from "@/components/HourlyTemperature";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FavoriteCities } from "@/components/favouriteCities";
import {
  UseForecastQuery,
  UseReverseGeocodeQuery,
  UseWeatherQuery,
} from "@/hooks/UseWeather";

function WeatherDashboard() {
  const { getLocation, locationData } = UseGeolocation();

  // const locationQuery = UseReverseGeocodeQuery(locationData.coordinates);
  const weatherQuery = UseWeatherQuery(locationData.coordinates);
  const forcastQuery = UseForecastQuery(locationData.coordinates);

  const handleRefresh = () => {
    getLocation();

    if (locationData.coordinates) {
      weatherQuery.refetch();
      forcastQuery.refetch();
      // locationQuery.refetch();
    }
  };

  if (
    locationData.isLoading ||
    weatherQuery.isLoading ||
    // locationQuery.isLoading ||
    forcastQuery.isLoading
  ) {
    return <WeatherSkeleton />;
  }

  if (locationData.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationData.error}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!locationData.coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Pls enable location access to see your local weather.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  // const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle> Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please Try Again</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (weatherQuery.error || forcastQuery.error) {
    <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4">
      {/* favourite cities */}
      <FavoriteCities />
      <div className="flex items-center justify-between">
        <h1 className="text-xcl font-bold tracking-tight">My Location</h1>
        <Button
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forcastQuery.isFetching}
          variant={"outline"}
        >
          <RefreshCw
            className={`h-4 w-4 ${
              weatherQuery.isFetching ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>

      {/* currently and hourly weather */}
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather
            data={weatherQuery.data!}
            // locationName={locationName}
          />
          <HourlyTemperature data={forcastQuery.data!} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data!} />
          <WeatherForcastDetails data={forcastQuery.data!} />
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
