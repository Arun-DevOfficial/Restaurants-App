export default function Hero() {
  return (
    <section className="w-full font-pops text-white lg:w-[80%] p-3 lg:p-8 lg:my-28 my-8 mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
        <div className="p-4 rounded-lg">
          <div className="w-full lg:max-w-[40%] md:max-w-[65%]">
            <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold capitalize">
              <span>We provide the</span>{" "}
              <span className="text-orange-500">best food for you</span>
            </h1>
            <p className="my-10 text-justify font-title text-2xl font-medium">
              Discover the flavors of the Middle East at ThaaiFood: a fusion of
              tradition and innovation in every bite. From tantalizing kebabs to
              fragrant biryanis, immerse yourself in a culinary adventure filled
              with passion and authenticity.
            </p>
          </div>
          <div className="flex space-x-8 my-12 justify-center lg:justify-start md:justify-start">
            <button className="bg-black rounded-tl-[20px] rounded-lg rounded-br-[20px] px-8 py-2 text-white font-medium text-md hover:bg-black/80">
              Menu
            </button>
            <button className="bg-orange-500 rounded-tl-[20px] rounded-lg rounded-br-[20px] px-8 py-2 text-white font-medium text-sm lg:text-md hover:bg-orange-400">
              Book a table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
