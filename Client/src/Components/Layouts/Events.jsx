import Client from "../../assets/Client.png";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";

export default function Events() {
  return (
    <>
      <section className="min-h-screen w-full p-12 bg-slate-50">
        <div className="mx-auto lg:w-[80%] flex my-44 flex-col lg:flex-row lg:justify-around lg:items-stretch space-y-8 lg:space-y-0">
          <div>
            <img
              src={Client}
              alt="client"
              className="rounded-lg w-[500px] h-auto lg:h-[550px] rounded-tl-[50px] rounded-br-[50px]"
            />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-16 w-full max-w-[40%]">
            <div>
              <h1 className="text-4xl mb-4 font-semibold text-slate-700 font-pops">
                Party
              </h1>
              <p className="text-slate-500 font-title font-medium text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                possimus.
              </p>
              <p className="text-slate-500 font-title font-medium text-xl my-2">
                Price :₹2399/3hr
              </p>
              <div className="flex space-x-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="text-yellow-500" />
                <FaRegStar className="text-yellow-500"/>
              </div>
            </div>
            <div>
              <h1 className="text-4xl mb-4 font-semibold text-slate-700 font-pops">
                Events
              </h1>
              <p className="text-slate-500 font-title font-medium text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                possimus in blanditiis.
              </p>
              <p className="text-slate-500 font-title font-medium text-xl my-2">
                Price :₹1399/3hr
              </p>
              <div className="flex space-x-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="text-yellow-500" />
                <FaRegStar className="text-yellow-500"/>
              </div>
            </div>
            <div>
              <h1 className="text-4xl mb-4 font-semibold text-slate-700 font-pops">
                Meeting's
              </h1>
              <p className="text-slate-500 font-title font-medium text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                possimus in blanditiis.
              </p>
              <p className="text-slate-500 font-title font-medium text-xl my-2">
                Price :₹1599/3hr
              </p>
              <div className="flex space-x-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="text-yellow-500" />
                <FaRegStar className="text-yellow-500"/>
              </div>
            </div>
            <div>
              <h1 className="text-4xl mb-4 font-semibold text-slate-700 font-pops">
                Couples
              </h1>
              <p className="text-slate-500 font-title font-medium text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                possimus in blanditiis corporis.
              </p>
              <p className="text-slate-500 font-title font-medium text-xl my-2">
                Price :₹999/3hr
              </p>
              <div className="flex space-x-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="text-yellow-500" />
                <FaRegStar className="text-yellow-500"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
