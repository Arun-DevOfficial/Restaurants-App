import { useParams } from "react-router-dom";

export default function ProfileSection() {
  const { id } = useParams(); // Capture the dynamic id parameter from the URL

  return (
    <div>
      <h1>Profile ID: {id}</h1>
    </div>
  );
}
