import { FaPhoneAlt } from "react-icons/fa";

export default function WorkerCard({
  name,
  phone,
  wage,
  active,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 cursor-pointer hover:shadow-md transition">

      <div className="flex justify-between">

        <div>

          <h2 className="text-lg font-bold">
            {name}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500">

            <FaPhoneAlt size={12} />

            <span>{phone}</span>

          </div>

          <p className="mt-3 font-semibold text-green-700">
            ₹{wage} / Day
          </p>

        </div>

        <div>

          {active ? (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Active
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              Inactive
            </span>
          )}

        </div>

      </div>

    </div>
  );
}