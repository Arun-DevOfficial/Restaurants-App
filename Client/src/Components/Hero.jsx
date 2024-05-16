// import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import Book from "../assets/Book.jpeg";

function Hero() {
  return (
    <>
      <section className="lg:p-16 p-3 w-full lg:w-[80%] mx-auto lg:py-32 py-16">
        <div className="flex justify-evenly flex-col lg:flex-row">
          <div className="lg:h-[540px]  flex flex-col justify-between">
            <div className="w-full lg:max-w-[50%]">
              <h1 className="text-3xl font-semibold lg:text-5xl font-pops uppercase">
                We provide the best for you
              </h1>
              <p className="py-6 text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti omnis, impedit ea quo libero eum labore sit ipsam
                dolore quae aut ipsum. Ut adipisci iste minima odit quidem,
                veritatis voluptas.
              </p>
              <div className="my-8 flex space-x-7">
                <button className="rounded-tl-[20px] rounded-br-[20px] rounded-lg font-medium text-md bg-[#0F0F0F] hover:bg-[#0F0F0F]/90 text-white px-8 py-3 border">
                  Menu
                </button>
                <button className="rounded-tl-[20px] rounded-br-[20px] rounded-lg font-medium text-md bg-[#eb6f28] hover:bg-[#eb6f28]/80 text-white px-8 py-3 border">
                  Book a table
                </button>
              </div>
            </div>
            <div className="mt-4 flex space-x-5 items-center">
              <div className="flex space-x-6">
                <FaFacebookF className="border border-slate-700 hover:border-orange-400 w-9 h-9 rounded-full p-2" />
                <FaTwitter className="border border-slate-700 hover:border-orange-400 w-9 h-9 rounded-full p-2" />
                <FaInstagram className="border border-slate-700 hover:border-orange-400 w-9 h-9 rounded-full p-2" />
              </div>
              <div className="bg-slate-600/50 h-[2px] w-20"></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={Book}
              alt="restaurant"
              className="w-[560px] h-[540px] my-12 lg:m-0 bg-cover bg-center rounded-[20px] rounded-tl-[70px] rounded-br-[70px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
