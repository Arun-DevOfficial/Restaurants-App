import ReactDOM from "react-dom/client";
import "./index.css";
// import router from "./Router/Router";
// import { RouterProvider } from "react-router-dom";
import ImageUploader from "./Components/ImageUploader";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <ImageUploader />
);
