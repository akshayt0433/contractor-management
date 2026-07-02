export default function Labours() {
  const labours = [
    {
      id: 1,
      name: "Ramesh",
      wage: 1200,
      status: "Present",
    },
    {
      id: 2,
      name: "Manu",
      wage: 1000,
      status: "Absent",
    },
    {
      id: 3,
      name: "Suresh",
      wage: 1100,
      status: "Present",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">
          Labours
        </h1>

        <button className="bg-green-700 text-white px-4 py-2 rounded-xl">
          + Add Labour
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Labour..."
        className="w-full p-3 border rounded-xl mb-6 bg-white"
      />

      <div className="space-y-4">
        {labours.map((labour) => (
          <div
            key={labour.id}
            className="bg-white rounded-2xl p-4 shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  {labour.name}
                </h2>

                <p className="text-gray-600">
                  ₹{labour.wage}/day
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  labour.status === "Absent"
                    ? "bg-red-500"
                    : "bg-green-600"
                }`}
              >
                {labour.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}