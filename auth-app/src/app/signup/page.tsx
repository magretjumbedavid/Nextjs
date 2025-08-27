import Image from 'next/image';
import Link from "next/link";
import Footer from '../home/Footers';
import Navbar from '../home/Navibars';

export default function Signup() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar/>
      <div className="flex ">
        <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-50 mb-6">
          <Image
            src="/images/firstimage.avif"
            alt="firstimage"
            width={650}
            height={1200}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-md p-8 space-y-6 background-color: transparent; mb-2">
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Create a password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-red-600 rounded-none hover:bg-green-700"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?
            <Link href="/login" className="text-red-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
    
    
  );
  
}
