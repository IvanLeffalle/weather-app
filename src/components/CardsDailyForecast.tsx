interface HighlightItem {
    icon: string;
    title: string;
    value: string;
  }
  
const CardsDailyForecast: React.FC<HighlightItem> = ({ icon, title, value }) => {
    return (
      <div className="bg-white rounded-lg p-4 w-full h-[200px] flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow">
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

  export default CardsDailyForecast;