export default function Testimonial() {
  return (
    <>
      <section className="bg-slate-800 py-12">
        <div className="w-full lg:w-[80%] mx-auto py-10 flex justify-center flex-col items-center">
          <h1 className="flex">
            <div className="flex p-3">
              <span className="text-white">❛</span>
              <span className="text-white">❛</span>
              <p className="text-xl lg:text-4xl font-title text-center text-white">
                Savor the flavors of Thailand in a setting that exudes
                tranquility and warmth.Reserve your table today and indulge in 
                 <span className="text-orange-500">
                   culinary journey filled with chill vibes and peaceful
                  ambiance.
                </span>
              </p>
              <span className="text-white">❜</span>
              <span className="text-white">❜</span>
            </div>
          </h1>
          <div className="mt-5">
            <p className="mt-3 text-xl font-pops text-white">
              - Er.Mr.Arun Kumar{" "}
            </p>
            <p className="font-medium text-slate-400">
              CEO, Founder of Thaaifood.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
