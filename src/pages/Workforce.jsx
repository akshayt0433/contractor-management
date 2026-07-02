import WorkerStats from "../components/workforce/WorkerStats";
import WorkerSearch from "../components/workforce/WorkerSearch";
import WorkerCard from "../components/workforce/WorkerCard";
import FloatingAddButton from "../components/workforce/FloatingAddButton";

export default function Workforce() {
  const workers = [
    {
      id: 1,
      name: "Ramesh",
      phone: "9876543210",
      wage: 1200,
      active: true,
    },
    {
      id: 2,
      name: "Manu",
      phone: "9876543211",
      wage: 1000,
      active: false,
    },
    {
      id: 3,
      name: "Suresh",
      phone: "9876543212",
      wage: 1100,
      active: true,
    },
    {
      id: 4,
      name: "Anil",
      phone: "9876543213",
      wage: 1300,
      active: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-28">

      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm p-6">

        <h1 className="text-3xl font-bold text-green-800">
          Workforce
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your construction workforce
        </p>

      </div>

      <div className="p-5">

        <WorkerStats />

        <WorkerSearch />

        {workers.map((worker) => (
          <WorkerCard
            key={worker.id}
            name={worker.name}
            phone={worker.phone}
            wage={worker.wage}
            active={worker.active}
          />
        ))}

      </div>

      <FloatingAddButton />

    </div>
  );
}