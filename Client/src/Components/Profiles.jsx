import { Link, Outlet } from "react-router-dom";

export default function Profiles() {
  return (
    <>
      <div className="flex gap-6 items-center">
        <div>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index}>
              <Link to={`interview/${index + 1}`}>Profile {index + 1}</Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
