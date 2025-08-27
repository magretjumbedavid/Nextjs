

import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-r from-black via-zinc-900 to-black rounded-xl my-6 flex flex-col md:flex-row items-center justify-between px-6 py-12">
    
      <div className="flex-1 text-left max-w-md">
        <div className="mb-2 text-green-500 font-medium">Categories</div>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
          Enhance Your <br /> Music Experience
        </h1>
      
        <div className="flex space-x-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-black text-2xl font-bold">23</div>
            <span className="mt-1 text-white text-xs">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-black text-2xl font-bold">05</div>
            <span className="mt-1 text-white text-xs">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-black text-2xl font-bold">59</div>
            <span className="mt-1 text-white text-xs">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-black text-2xl font-bold">35</div>
            <span className="mt-1 text-white text-xs">Seconds</span>
          </div>
        </div>
        <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition">Buy Now!</button>
      </div>
      
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <Image
          src="/images/boombox.png"
          alt="Speaker"
          width={520}
          height={340}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
