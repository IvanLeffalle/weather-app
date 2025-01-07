import windy from "../assets/images/windy.png";
import Humidity from "../assets/images/humidity.png";
import Visibility from "../assets/images/visibility.png";
import Max from "../assets/images/temp-max.png";
import Min from "../assets/images/temp-min.png";
import Pressure from "../assets/images/visibility.png";

interface TodayHighlightProps {
  width: string;
  height: string;
}

interface HighlightItem {
  icon: string;
  title: string;
  value: string;
}

const items: HighlightItem[] = [
  { icon: windy, title: "Wind", value: "4.63 meter/sec" },
  { icon: Humidity, title: "Humidity", value: "89%" },
  { icon: Visibility, title: "Visibility", value: "10000 meters" },
  { icon: Max, title: "Max", value: "3°C" },
  { icon: Min, title: "Min", value: "1°C" },
  { icon: Pressure, title: "Pressure", value: "1003 hPa" },
];

// Subcomponente para cada tarjeta de destacado
const HighlightCard: React.FC<HighlightItem> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2">
        <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        <div>
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default function TodayHighlight({ width, height }: TodayHighlightProps) {
  return (
    <div
      className={`flex flex-col ${width} ${height} items-center  bg-white  shadow-lg rounded-lg space-y-4 justify-between p-8`}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 w-full text-left text-black">
        Today's Highlights
      </h1>

      {/* Grid de tarjetas */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <HighlightCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}