import Header from "../Components/Layouts/Header";
import Hero from "../Components/Layouts/Hero";
import Background from "../assets/Background.jpg";
import Product from "../Components/Layouts/product";
import Event from "../Components/Layouts/Events";
import Gallary from "../Components/Layouts/Gallary";
import Testimonial from "../Components/Layouts/Testimonial";
import Feedbacks from "../Components/Layouts/Feedbacks";
import Footer from "../Components/Layouts/Footer";

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
      <Testimonial />
      <Feedbacks />
      <Footer />
    </>
  );
}

export default Home;
