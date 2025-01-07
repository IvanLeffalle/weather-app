interface EmptyCardsProps {
  widht: string;
  height: string;
}
export default function EmptyCards({ widht, height }: EmptyCardsProps) {
  return (
    <div
      className={`flex flex-col ${widht} ${height} items-center justify-center bg-slate-500 rounded-lg`}
    >
      <h1 className="text-4xl font-bold mb-4">No cards found</h1>
    </div>
  );
}
