"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: 1, name: "Phones", iconSrc: "/images/phoneicon.jpg" },
  { id: 2, name: "Computers", iconSrc: "/images/computericon.jpg" },
  { id: 3, name: "SmartWatch", iconSrc: "/images/smartwatch.jpg" },
  { id: 4, name: "Camera", iconSrc: "/images/secondgaming.png" },
  { id: 5, name: "HeadPhones", iconSrc: "/images/headphone.jpg" },
  { id: 6, name: "Gaming", iconSrc: "/images/gamig.jpg" },
];

export default function BrowseCategories() {
  const [activeCategory, setActiveCategory] = useState(4); 

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="mb-4">
        <span className="text-red-600 text-sm font-semibold">Categories</span>
        <h2 className="text-2xl font-bold mt-1">Browse By Category</h2>
      </div>
      <div className="flex space-x-4">
        {categories.map(({ id, name, iconSrc }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`flex flex-col items-center pr-8 border rounded-md px-16 py-8 transition ${
              activeCategory === id
                ? "bg-red-600 border-red-600 text-white"
                : "border-gray-300 text-black"
            }`}
          >
            <Image
              src={iconSrc}
              alt={name}
              width={32}
              height={32}
              className={`mb-2 ${
                activeCategory === id ? "filter brightness-0 invert" : ""
              }`}
            />
            <span className="text-xs">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
