import { FaSearch } from "react-icons/fa";

export default function WorkerSearch() {
  return (
    <div className="relative mb-6">
      <FaSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search worker..."
        className="w-full bg-white rounded-2xl border border-gray-200 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}