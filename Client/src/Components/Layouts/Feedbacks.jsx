import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";

export default function Feedbacks() {
  const testimonials = {
    testimonials: [
      {
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        username: "Emily Smith",
        role: "Food Blogger",
        feedback:
          "As a food enthusiast, I've dined at countless places, but none compare to the culinary journey at your Thai food paradise. Each dish is a masterpiece, and the ambiance is simply enchanting.",
      },
      {
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        username: "Alex Johnson",
        role: "Event Planner",
        feedback:
          "Planning events is my passion, and finding the perfect venue is key. Your restaurant not only exceeds expectations in flavor but also in service and ambiance. It's become my go-to recommendation for any celebration.",
      },
      {
        photo: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        username: "Jessica Wong",
        role: "Local Food Critic",
        feedback:
          "As a critic, I'm always searching for authenticity and quality. Your Thai cuisine not only meets but surpasses those standards. It's a true gem in the culinary scene, and I can't wait to return.",
      },
    ],
  };

  return (
    <>
      <section className="bg-[#ffff] py-12">
        <div className="w-full lg:w-[80%] mx-auto py-28">
          <div className="text-center w-full lg:max-w-[40%] p-4 mx-auto">
            <h1 className="text-2xl lg:text-6xl text-slate-700 font-semibold font-title">
              Our Happy Customers
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur asperiores unde nihil eveniet nesciunt facere.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-28 p-6">
            {testimonials.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative border shadow rounded-tl-[70px] rounded-br-[70px] bg-white"
              >
                <img
                  src={testimonial.photo}
                  alt="customer"
                  className="absolute -top-8 lg:left-[200px] left-[155px] h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-slate-300 bg-cover bg-center p-1"
                />
                <div className="flex flex-col items-center justify-evenly p-5 text-center mt-20 space-y-8">
                  <div className="flex space-x-2">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalf className="text-yellow-500" />
                    <FaRegStar className="text-yellow-500" />
                  </div>
                  <p className="text-slate-500/70">{testimonial.feedback}</p>
                  <div>
                    <h1 className="text-xl text-slate-800 font-medium">
                      {testimonial.username}
                    </h1>
                    <p className="text-slate-500/80 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
