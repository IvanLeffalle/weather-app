import { AiOutlineEnvironment } from "react-icons/ai";
import placeholder from "../assets/images/cloudy.png";
interface EmptyCardsProps {
  width: string;
  height: string;
}
export default function TodayCard({ width, height }: EmptyCardsProps) {
  return (
    <div
      className={`flex flex-col ${width} ${height} shadow-lg items-center rounded-lg space-y-4 justify-between p-8`}
    >
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold mb-4">Today</h1>
        <div className="flex items-center gap-2">
          <AiOutlineEnvironment />
          <p>Resistencia, Chaco</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <img src={placeholder} alt="" />
        <h2 className=" text-4xl font-semibold "> 2°C</h2>
      </div>
      <h3 className="text-2xl">clear sky</h3>
      <p className="">Feels like -2°C</p>
    </div>
  );
}
