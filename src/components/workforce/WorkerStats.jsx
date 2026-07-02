export default function WorkerStats() {
  const stats = [
    {
      title: "Total Workers",
      value: "25",
      color: "text-green-700",
      bg: "bg-green-100",
    },
    {
      title: "Present Today",
      value: "21",
      color: "text-blue-700",
      bg: "bg-blue-100",
    },
    {
      title: "Absent Today",
      value: "4",
      color: "text-red-700",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100"
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}
          >
            <span className={`font-bold ${stat.color}`}>
              {stat.value}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}