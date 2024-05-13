// import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import Book from "../assets/Book.jpeg";

function Hero() {
  return (
    <>
      <section className="w-full lg:w-[80%] py-12 lg:py-28 mx-auto">
        <div className="flex flex-col items-stretch justify-between lg:flex-row lg:justify-between h-[400px]">
          <div className="flex flex-col lg:justify-between h-full">
            <div className="w-full lg:max-w-[60%]">
              <h1 className="lg:text-6xl text-2xl font-bold uppercase text-slate-800">
                We provide the best food for you.
              </h1>
              <p className="my-10 text-lg text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita aliquam commodi deleniti, deserunt et nihil porro
                excepturi ex reiciendis minus corrupti optio tempora aliquid vel
                blanditiis tenetur, odio aspernatur amet.
              </p>
              <div className="flex space-x-7">
                <button className="bg-[#101a24] shadow-lg text-white px-8 py-2 rounded-tl-[20px] rounded-md rounded-br-[20px] font-medium text-md">
                  Menu
                </button>
                <button className="bg-[#EA6D27] shadow-lg text-white px-8 py-2 rounded-tl-[20px] rounded-md rounded-br-[20px] font-medium text-md">
                  Book a table
                </button>
              </div>
            </div>
            <div className="flex space-x-5 items-center my-10">
              <div className="flex space-x-4">
                <FaFacebookF className="w-9 h-9 rounded-full p-2 border border-slate-800 hover:border-[#EA6D27] hover:text-[#EA6D27] cursor-pointer" />
                <FaTwitter className="w-9 h-9 rounded-full p-2 border border-slate-800 hover:border-[#EA6D27] hover:text-[#EA6D27] cursor-pointer" />
                <FaInstagram className="w-9 h-9 rounded-full p-2 border border-slate-800 hover:border-[#EA6D27] hover:text-[#EA6D27] cursor-pointer" />
              </div>
              <div className="bg-slate-800 w-28 h-[1px]"></div>
            </div>
          </div>
          <div className="lg:p-4 p-2 hidden lg:block">
            <div>
              <img
                src={Book}
                alt="Logo"
                className="w-[600px] bg-center bg-cover h-[540px] rounded-tl-[40px] rounded-br-[40px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
