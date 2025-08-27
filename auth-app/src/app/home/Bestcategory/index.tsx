"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const slides = [
  {
    id: 1,
    imgSrc: "/images/secondimage.jpg",
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    shopLink: "/shop",
   
  },
];

export default function BannerWithSidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex">
      
      <aside className="w-56 border-r border-gray-200 p-4">
        <ul className="space-y-3 text-sm">
          {categories.map((category, index) => (
            <li key={index} className="hover:text-red-500 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </aside>

     
      <div className="relative flex-1">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.imgSrc}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
           
              className="rounded-lg"
            />
            <div className="absolute left-10 top-1/3 text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.subtitle}</p>
              <Link
                href={slide.shopLink}
                className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}

       
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}