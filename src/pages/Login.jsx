export default function Login() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🏗️</div>

          <h1 className="text-3xl font-bold text-green-800">
            Contractor Management
          </h1>

          <p className="text-gray-600 mt-3">
            Manage labours, sites, payments and materials
          </p>
        </div>

        <div className="space-y-4">
          
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <div className="flex">
            <div className="bg-gray-100 border border-gray-300 rounded-l-xl px-4 flex items-center">
              +91
            </div>

            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition"
          >
            Send OTP
          </button>
        </div>

      </div>
    </div>
  );
}