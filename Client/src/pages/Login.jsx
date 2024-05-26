import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../pages/style.css";
// import { createContext, useState } from "react";

export default function Login() {
  // const [username, setUserName] = useState();

  const navigate = useNavigate();
  // const NameContext = createContext(null); // Context api

  // Schema for formData validation
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  // useForm hook for form management and validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Simulating asynchronous behavior with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sending form data to the backend for signup
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/Login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // await setUserName(response.data);
      // console.log(username);
      // Handling response messages
      let message;
      if (response.status >= 200 && response.status < 300) {
        message = response.data.message;
      } else {
        message = response.statusText;
      }
      toast.success(message);

      // Navigating to login page after signup
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Signup page layout */}
      <section className="h-screen bg-slate-100 flex flex-col lg:flex-row">
        {/* Left section with background image */}
        <div className="relative order-2 bg-[url(https://images.unsplash.com/photo-1598452498516-76a50b446f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU4fHxSZXN0YXVyYW50fGVufDB8fDB8fHww)] transition-all ease-in-out duration-150 w-4/12 bg-cover bg-center flex-shrink-0">
          {/* Logo and branding */}
          <Link
            to={`/`}
            className="hidden lg:flex items-center absolute left-2 top-8 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="max-w-14" />
            <h1 className="text-xl font-semibold text-white">
              Thaai <span className="text-orange-500">food</span>
            </h1>
          </Link>
          {/* Information and branding */}
          <div className="hidden lg:block bg-white/10 border border-slate-100/20 text-white absolute bottom-10 w-full lg:max-w-[70%] rounded-[20px] left-24 py-7 px-6 shadow-lg">
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
        {/* Right section with signup form */}
        <div className="min-h-screen lg:w-[80%] mx-auto p-6 flex flex-col lg:p-12">
          <div className="self-end">
            {/* Link to login page */}
            <h1 className="font-semibold font-offer">
              Do not have an account?{" "}
              <Link to={`/profile`} className="text-orange-500 hover:underline">
                Signup
              </Link>
            </h1>
          </div>
          {/* Signup form */}
          <div className="h-full flex justify-center items-center mt-7 lg:mt-0">
            <div>
              <div className="text-center">
                <h1 className="font-semibold text-xl lg:text-3xl font-offer">
                  Welcome Back 👋
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
              {/* Signup form */}
              <form
                className="my-12 w-full mx-auto flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-white font-offer rounded-lg w-full p-5 border-2 focus:outline-none focus:border-orange-200"
                  {...register("email")}
                />
                {/* Error message for email field */}
                {errors.email && (
                  <p className="text-red-500 font-offer">
                    {errors.email.message}
                  </p>
                )}

                <div className="bg-white rounded-lg w-full p-5 border border-gray-300 focus-within:border-orange-300">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full focus:outline-none font-offer focus:border-transparent hover:border-orange-300"
                    {...register("password")}
                  />
                </div>
                {/* Error message for password field */}
                {errors.password && (
                  <p className="text-red-500 font-offer">
                    {errors.password.message}
                  </p>
                )}
                {/* Submit button */}
                <button
                  disabled={isSubmitting}
                  className="bg-orange-400 items-center justify-center flex space-x-6 rounded-xl w-full p-5 border-2 font-medium text-white font-offer hover:bg-orange-500"
                >
                  {/* Loading indicator */}
                  {isSubmitting && <div className="loader" />}
                  <h1>{isSubmitting ? "Loading..." : "Login"}</h1>
                </button>
              </form>
              {/* Terms of Use */}
              <p className="text-md font-offer text-slate-500">
                By Continuing you indicate that you read and agreed to the Terms
                of Use.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Toast notifications */}
      <Toaster />
    </>
  );
}
