"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../home/Footers";
import Navbar from "../home/Navibars";

export default function Login() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
    <Navbar/>

      
        <div className="flex flex-col">
          <div className="flex">
            <div className="hidden flex md:flex w-1/2 items-center justify-center bg-blue-50">
              <Image
                src="/images/firstimage.avif"
                alt="firstimage"
                width={650}
                height={1200}
                className="object-contain"
              />
            </div>
            
            <div className="flex w-full md:w-1/2 items-center justify-center p-8">
              <div className="w-full max-w-md p-8 space-y-6 bg-white  rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-black-800">Login in Exclusive</h2>
                <h4 className="  text-center text-black-300">Enter your details below</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-25 py-2 font-semibold text-white bg-red-500 rounded-none hover:bg-blue-300"
                  >
                    Login
                  </button>
                </form>
                <p className="text-sm text-center text-red-400">
                  Forgot password?{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                  </Link>
                </p>
              </div>
            
          </div>
        </div>
        <Footer/>
            </div>
     
    </div>
  );
}
