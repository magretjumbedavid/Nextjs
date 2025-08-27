import Image from "next/image";

export default function NewArrivalSection() {
  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-3">
          <span className="flex items-center text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded mr-2">Featured</span>
        </div>
        <h2 className="text-3xl font-semibold mb-8">New Arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-black rounded-xl overflow-hidden relative h-[320px] flex items-end">
            <Image
              src="/images/PlayStation.webp"
              alt="PlayStation 5"
              width={400}
              height={320}
              className="absolute inset-0 object-contain w-full h-full"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent w-full">
              <div className="text-white text-lg font-semibold mb-1">PlayStation 5</div>
              <div className="text-gray-300 text-sm mb-4">Black and White version of the PS5 coming out on sale.</div>
              <button className="bg-white text-black px-4 py-2 rounded font-medium text-xs hover:bg-gray-200">Shop Now</button>
            </div>
          </div>
         
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[320px]">
            
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-xl overflow-hidden flex items-center relative h-full">
              <Image
                src="/images/girl.webp"
                alt="Women's Collections"
                width={220}
                height={120}
                className="object-cover h-full w-1/3"
              />
              <div className="p-6">
                <div className="text-white text-lg font-semibold mb-1">Women&apos;s Collections</div>
                <div className="text-gray-300 text-sm mb-3">
                  Featured woman collections that give you another vibe.
                </div>
                <button className="bg-white text-black px-4 py-2 rounded font-medium text-xs hover:bg-gray-200">Shop Now</button>
              </div>
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden p-4 flex flex-col justify-between">
              <Image
                src="/images/battery.gif"
                alt="Speakers"
                width={80}
                height={50}
                className="object-contain mb-4"
              />
              <div>
                <div className="text-white text-sm font-semibold mb-1">Speakers</div>
                <div className="text-gray-300 text-xs mb-2">Amazon wireless speakers</div>
                <button className="bg-white text-black px-4 py-2 rounded font-medium text-xs hover:bg-gray-200">Shop Now</button>
              </div>
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden p-4 flex flex-col justify-between">
              <Image
                src="/images/perfume.png"
                alt="Perfume"
                width={80}
                height={50}
                className="object-contain mb-4"
              />
              <div>
                <div className="text-white text-sm font-semibold mb-1">Perfume</div>
                <div className="text-gray-300 text-xs mb-2">GUCCI INTENSEOUD EDP</div>
                <button className="bg-white text-black px-4 py-2 rounded font-medium text-xs hover:bg-gray-200">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
          <div>
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-gray-100 p-3">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                  <path d="M3 12v-2a1 1 0 011-1h13a1 1 0 011 1v2M7 16h10a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z"></path>
                </svg>
              </span>
            </div>
            <div className="font-semibold">FREE AND FAST DELIVERY</div>
            <div className="text-xs text-gray-500">Free delivery for all orders over $140</div>
          </div>
         
          <div>
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-gray-100 p-3">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                  <path d="M12 22s8-4.5 8-10A8 8 0 104 12c0 5.5 8 10 8 10z"></path>
                </svg>
              </span>
            </div>
            <div className="font-semibold">24/7 CUSTOMER SERVICE</div>
            <div className="text-xs text-gray-500">Friendly 24/7 customer support</div>
          </div>
         
          <div>
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-gray-100 p-3">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </span>
            </div>
            <div className="font-semibold">MONEY BACK GUARANTEE</div>
            <div className="text-xs text-gray-500">We return money within 30 days</div>
          </div>
        </div>
      </div>
    </section>
  );
}