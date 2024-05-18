import Header from "../Components/Layouts/Header";
import Hero from "../Components/Layouts/Hero";
import Background from "../assets/Background.jpg";
import Product from "../Components/Layouts/product";
import Event from "../Components/Layouts/Events";

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
    </>
  );
}

export default Home;
