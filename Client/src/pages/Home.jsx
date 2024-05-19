import Header from "../Components/Layouts/Header";
import Hero from "../Components/Layouts/Hero";
import Background from "../assets/Background.jpg";
import Product from "../Components/Layouts/product";
import Event from "../Components/Layouts/Events";
import Gallary from "../Components/Layouts/Gallary";

function Home() {
  return (
    <>
      <header
        className="bg-center bg-cover min-h-screen"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <Hero />
      </header>
      <Product />
      <Event />
      <Gallary />
    </>
  );
}

export default Home;
