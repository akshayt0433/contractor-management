export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-800">
          Dashboard
        </h1>

        <p className="text-gray-600">
          Welcome back
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="text-gray-500">Active Sites</h3>
          <p className="text-3xl font-bold text-green-700">5</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="text-gray-500">Present</h3>
          <p className="text-3xl font-bold text-green-700">28</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="text-gray-500">Absent</h3>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="text-gray-500">Pending Salary</h3>
          <p className="text-xl font-bold text-orange-500">
            ₹45,000
          </p>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-green-700 text-white p-4 rounded-2xl">
          👷 Add Labour
        </button>

        <button className="bg-green-700 text-white p-4 rounded-2xl">
          🏗 Add Site
        </button>

        <button className="bg-green-700 text-white p-4 rounded-2xl">
          💰 Give Advance
        </button>

        <button className="bg-green-700 text-white p-4 rounded-2xl">
          📦 Add Material
        </button>

        <button className="bg-green-700 text-white p-4 rounded-2xl">
          🧾 Add Expense
        </button>

        <button className="bg-green-700 text-white p-4 rounded-2xl">
          📊 Reports
        </button>
      </div>
    </div>
  );
}