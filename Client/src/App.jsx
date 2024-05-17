import { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
