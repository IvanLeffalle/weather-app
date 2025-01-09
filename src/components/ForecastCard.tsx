import CardsDailyForecast from "./CardsDailyForecast";

interface EmptyCardsProps {
  width: string;
  height: string;
  data: any;
}

interface DayItem {
  title: string;
  icon: string;
  temp: string;
}

export default function ForecastCard({ width, height, data }: EmptyCardsProps) {
  if (!data || !data.list) {
    return <p>No hay datos de pronóstico disponibles</p>;
  }

  // Procesar los datos para obtener un pronóstico por día
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (!acc[date]) {
      acc[date] = {
        title: date,
        icon: item.weather[0].icon,
        temp: item.main.temp.toFixed(1),
      };
    }
    return acc;
  }, {});

  const days: DayItem[] = Object.values(dailyForecast).slice(0, 5); // Mostrar solo 5 días

  return (
    <div
      className={`flex flex-col ${width} ${height} items-center justify-center bg-white shadow-lg rounded-lg p-4`}
    >
      <h1 className="text-2xl md:text-4xl w-full text-start font-bold mb-4">
        Pronóstico
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full overflow-x-auto">
        {days.map((day, index) => (
          <CardsDailyForecast
            key={index}
            title={day.title}
            icon={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
            value={`${day.temp}°C`}
          />
        ))}
      </div>
    </div>
  );
}
