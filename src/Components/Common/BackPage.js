import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function BackPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <button onClick={goBack}>
      <BiArrowBack className="text-2xl" />
    </button>
  );
}
