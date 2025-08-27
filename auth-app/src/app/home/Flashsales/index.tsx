     "use client"

import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    imageSrc: "/images/gamepad-removebg-preview.png",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    imageSrc: "/images/wiredkeyboard.jpg",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    imageSrc: "/images/gamingmonitor.webp",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-series Comfort Chair",
    imageSrc: "/images/chair.webp",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push("★");
    } else if (i - rating < 1) {
      stars.push("☆"); 
    } else {
      stars.push("☆");
    }
  }
  return (
    <span className="text-yellow-400">
      {stars.map((star, idx) => (
        <span key={idx}>{star}</span>
      ))}
    </span>
  );
}

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

 

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-5 h-8 bg-red-600 rounded-md" />
        <h2 className="text-red-600 font-semibold">Todays</h2>
      </div>
      <h1 className="text-3xl font-bold mb-6">Flash Sales</h1>

   
      <div className="flex space-x-4 text-center font-mono font-semibold mb-8">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="flex flex-col">
            <span className="text-3xl">{timeLeft[unit as keyof typeof timeLeft]}</span>
            <span className="text-xs uppercase">{unit}</span>
          </div>
        ))}
      </div>

  
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className=" p-4">
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discount}%
            </div>

            <div className="relative h-40 mb-4">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>

            <h3 className="text-sm font-semibold mb-1">{product.name}</h3>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-red-600 font-bold">${product.price}</span>
              <span className="line-through text-gray-400 text-xs">${product.originalPrice}</span>
            </div>

            <div className="flex items-center space-x-1 mb-1">
              <StarRating rating={product.rating} />
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>

          
            {product.name === "AK-900 Wired Keyboard" && (
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 mt-2">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

    
      <div className="text-center mt-10">
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded text-lg">
          View All Products
        </button>
      </div>
    </div>
  );
}
