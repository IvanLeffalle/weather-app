interface HighlightItem {
  icon: string;
  title: string;
  value: string;
}

const CardsDailyForecast: React.FC<HighlightItem> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full h-[200px] flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-col flex align-middle justify-center items-center gap-2">
        <p className="text-xl w-full font-semibold">{title}</p>
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-8 h-8 align-middle justify-center items-center"
        />
        <p className="text-lg w-full text-center">{value}</p>
      </div>
    </div>
  );
};

export default CardsDailyForecast;
