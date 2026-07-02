import { useState } from "react";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AddWorker() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    wage: "",
    status: "Active",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-white shadow-sm px-5 py-4 flex items-center gap-4">

        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl text-green-700" />
        </button>

        <h1 className="text-2xl font-bold">
          Add Worker
        </h1>

      </div>

      <div className="p-5">

        {/* Photo */}

        <div className="flex justify-center mb-8">

          <div className="w-28 h-28 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">

            <FaCamera className="text-3xl text-gray-400" />

          </div>

        </div>

        {/* Name */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
            placeholder="Enter worker name"
          />

        </div>

        {/* Phone */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
            placeholder="Enter phone number"
          />

        </div>

        {/* Daily Wage */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Daily Wage (₹)
          </label>

          <input
            type="number"
            name="wage"
            value={form.wage}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
            placeholder="1200"
          />

        </div>

        {/* Status */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          >

            <option>Active</option>

            <option>Inactive</option>

          </select>

        </div>

        {/* Notes */}

        <div className="mb-8">

          <label className="block mb-2 font-medium">
            Notes
          </label>

          <textarea
            rows="4"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
            placeholder="Optional notes..."
          />

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            onClick={() => navigate(-1)}
            className="flex-1 border rounded-xl py-4 font-semibold"
          >
            Cancel
          </button>

          <button
            className="flex-1 bg-green-700 text-white rounded-xl py-4 font-semibold"
          >
            Save Worker
          </button>

        </div>

      </div>

    </div>
  );
}