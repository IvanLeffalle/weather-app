import CardsDailyForecast from "./CardsDailyForecast";
import placeholder from "../assets/images/cloudy.png";

interface EmptyCardsProps {
  width: string;
  height: string;
}
interface dayItem {
  title: string;
  icon: string;
  value: string;
}
const days: dayItem[] = [
  { icon: placeholder, title: "Wednesday", value: "2°C" },
  { icon: placeholder, title: "Wednesday", value: "2°C" },
  { icon: placeholder, title: "Wednesday", value: "2°C" },
  { icon: placeholder, title: "Wednesday", value: "2°C" },
];

export default function ForecastCard({ width, height }: EmptyCardsProps) {
  return (
    <div
      className={`flex flex-col ${width} ${height} items-center justify-center bg-white shadow-lg rounded-lg p-4`}
    >
      <h1 className="text-4xl  w-full text-start justify-start font-bold mb-4">
        ForecastCard
      </h1>
      <div className="flex gap-4 w-full ">
        {days.map((day, index) => (
          <CardsDailyForecast key={index} {...day} />
        ))}
      </div>
    </div>
  );
}
