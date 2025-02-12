import { ForecastData } from "@/API/types";
import { format } from "date-fns";
import { Droplets, ArrowDown, ArrowUp, Wind } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
interface WeatherForcastProps {
  data: ForecastData;
}

interface DailyForerst {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

function WeatherForcastDetails({ data }: WeatherForcastProps) {
  const dailyForest = data.list.reduce((acc, curr) => {
    const date = format(new Date(curr.dt * 1000), "yyyy-MM-dd");

    if (!acc[date]) {
      acc[date] = {
        temp_min: curr.main.temp_min,
        temp_max: curr.main.temp_max,
        humidity: curr.main.humidity,
        wind: curr.wind.speed,
        weather: curr.weather[0],
        date: curr.dt,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, curr.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, curr.main.temp_max);
    }

    return acc;
  }, {} as Record<string, DailyForerst>);

  const nextDays = Object.values(dailyForest).slice(0, 6);
  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>5 Days Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {nextDays.map((day) => {
            return (
              <div
                key={day.date}
                className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">
                    {format(new Date(day.date * 1000), "EEE MMM d")}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {day.weather.description}
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <span className="flex items-center text-blue-500">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    {formatTemp(day.temp_min)}
                  </span>
                  <span className="flex items-center text-red-500">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    {formatTemp(day.temp_max)}
                  </span>
                </div>

                <div className="flex justify-end gap-4">
                  <span className="flex items-center gap-1">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{day.humidity}%</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Wind className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{day.wind}m/s</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default WeatherForcastDetails;
