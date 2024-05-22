import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Signup() {
  return (
    <>
      <section className="h-screen bg-slate-100 flex flex-col lg:flex-row">
        <div className="relative bg-[url(https://images.unsplash.com/photo-1512442768687-8073560351ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlc3RhdXJhbnQlMjBpbWFnZXxlbnwwfDF8MHx8fDA%3D)] w-4/12 bg-cover bg-center flex-shrink-0">
          <Link
            to={`/`}
            className="hidden lg:flex items-center absolute left-2 top-8 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="max-w-14" />
            <h1 className="text-xl font-semibold text-white">
              Thaai <span className="text-orange-500">food</span>
            </h1>
          </Link>
          <div className="bg-white/10 border border-slate-100/20 text-white absolute bottom-10 w-full lg:max-w-[70%] rounded-[20px] left-24 py-7 px-6 shadow-lg">
            <div className="flex gap-3 rounded-full px-4 py-1 shadow-sm cursor-pointer my-5 bg-orange-500 w-full lg:max-w-[50%]">
              <p>✨</p>
              <h1 className="font-bold flex-shrink-0">Have a nice day</h1>
            </div>
            <p className="font-medium font-pops">
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.
            </p>
          </div>
        </div>
        <div className="min-h-screen lg:w-[80%] mx-auto p-6 flex flex-col lg:p-12">
          <div className="self-end">
            <h1 className="font-semibold font-offer">
              Have an account?{" "}
              <Link
                to={`/profile/Login`}
                className="text-orange-500 hover:underline"
              >
                Login
              </Link>
            </h1>
          </div>

          {/* Sign Up form */}
          <div className="h-full flex justify-center items-center mt-7 lg:mt-0">
            <div>
              <div className="text-center">
                <h1 className="font-semibold text-xl lg:text-3xl font-offer">
                  Welcome to Thaai food 👋
                </h1>
                <p className="text-md mt-2 text-slate-500 font-medium font-pops">
                  Create an account to get started
                </p>
                <div className="my-8">
                  <div className="bg-slate-200 h-[2px] relative">
                    <p className="absolute -top-3 font-offer bg-slate-100 px-4 lg:left-48 left-24">
                      Or Continue With
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-12 w-full mx-auto flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  className="bg-white rounded-lg font-offer w-full p-5 border-2 focus:outline-none focus:border-orange-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-white font-offer rounded-lg w-full p-5 border-2 focus:outline-none focus:border-orange-200"
                />
                <div className="bg-white rounded-lg w-full p-5 border border-gray-300 focus-within:border-orange-300">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full focus:outline-none font-offer focus:border-transparent hover:border-orange-300"
                  />
                </div>

                <button className="bg-orange-400 rounded-2xl w-full p-5 border-2 font-medium text-white font-offer hover:bg-orange-500">
                  Create Account
                </button>
                <p className="text-md font-offer text-slate-500">
                  By Continuing you indicate that you read and agreed to the
                  Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
