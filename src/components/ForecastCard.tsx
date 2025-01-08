import CardsDailyForecast from "./CardsDailyForecast";

interface EmptyCardsProps {
  width: string;
  height: string;
}
interface dayItem{
  name:string;
  icon:string;
  value:string;
}
const days: dayItem[]=[
  {icon: "", title:"", },
  {},
  {},
  {},
]
  

export default function ForecastCard({ width, height }: EmptyCardsProps) {
  return (
    <div
      className={`flex flex-col ${width} ${height} items-center justify-center bg-slate-500 rounded-lg`}
    >
      <h1 className="text-4xl font-bold mb-4">ForecastCard</h1>
    </div>
  );
}
