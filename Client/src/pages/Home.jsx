import Header from "../Components/Layouts/Header";
import Hero from "../Components/Layouts/Hero";
import Background from "../assets/Background.jpg";

function Home() {
  return (
    <>
      <section
        className="bg-center bg-cover min-h-screen"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <Hero />
      </section>
    </>
  );
}

export default Home;
