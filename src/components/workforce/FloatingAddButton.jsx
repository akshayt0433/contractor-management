import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FloatingAddButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/workforce/add")}
      className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-green-700 text-white shadow-xl hover:bg-green-800 transition flex items-center justify-center"
    >
      <FaPlus size={22} />
    </button>
  );
}