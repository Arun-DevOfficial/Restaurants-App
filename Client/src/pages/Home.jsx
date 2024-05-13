import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <header>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <div className="flex justify-center items-center px-4 lg:px-8">
            <div className="w-full">
              <div>
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
