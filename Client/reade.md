  <div className="text-center">
            <h1 className="font-semibold text-3xl font-offer">
              Welcome to Thaai food 👋
            </h1>
            <p className="text-md mt-2 text-slate-400 font-medium font-pops">
              Create an account to get started
            </p>
            <div className="my-4">
              <div className="bg-slate-200 h-[2px] relative">
                <p className="absolute -top-3 font-offer bg-slate-100 px-4 left-28">
                  Or Continue With
                </p>
              </div>
            </div>
          </div>
          <div className="my-7 w-full mx-auto flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              className="bg-white rounded-lg w-full p-5 border-2 focus:outline-none focus:border-orange-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Full Name"
              className="bg-white rounded-lg w-full p-5 border-2 focus:outline-none focus:border-orange-200"
            />
            <div className="bg-white rounded-lg w-full p-5 border border-gray-300 focus-within:border-orange-300">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full focus:outline-none focus:border-transparent hover:border-orange-300"
              />
            </div>

            <button className="bg-orange-400 rounded-2xl w-full p-5 border-2 font-medium text-white font-offer hover:bg-orange-500">
              Create Account
            </button>
          </div>