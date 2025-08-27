"use client";

import Image from "next/image";


const products = [
  {
    name: "Breed Dry Dog Food",
    image: "/images/dog.jpg",
    price: "$100",
    rating: 5,
    reviews: 65,
    isNew: false,
    variants: ["red", "green", "black"],
    button: null,
  },
  {
    name: "CANON EOS DSLR Camera",
    image: "/images/realcamera.png",
    price: "$360",
    rating: 5,
    reviews: 95,
    isNew: false,
    variants: ["black"],
    button: "Add To Cart",
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: "/images/laptop.jpeg",
    price: "$700",
    rating: 5,
    reviews: 325,
    isNew: false,
    variants: ["red", "blue"],
    button: null,
  },
  {
    name: "Curology Product Set",
    image: "/images/mafuta.jpeg",
    price: "$500",
    rating: 4,
    reviews: 145,
    isNew: false,
    variants: [],
    button: null,
  },
  {
    name: "Kids Electric Car",
    image: "/images/car.webp",
    price: "$960",
    rating: 5,
    reviews: 65,
    isNew: true,
    variants: ["red", "white", "black"],
    button: null,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "/images/shoes.avif",
    price: "$1160",
    rating: 5,
    reviews: 95,
    isNew: false,
    variants: ["red", "black"],
    button: null,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: "/images/blackone.avif",
    price: "$660",
    rating: 5,
    reviews: 55,
    isNew: true,
    variants: ["black", "red", "green"],
    button: null,
  },
  {
    name: "Quilted Satin Jacket",
    image: "/images/leather.webp",
    price: "$660",
    rating: 5,
    reviews: 95,
    isNew: false,
    variants: ["black", "green"],
    button: null,
  },
];

const colors = {
  red: "bg-red-500",
  green: "bg-green-500",
  black: "bg-black",
  white: "bg-white border",
  blue: "bg-blue-500",
};

export default function ProductsSection() {
  return (
    <section className="px-6 pt-8 pb-16 bg-white rounded-xl mt-6">
     
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded">
          Our Products
        </span>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <svg
           
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <svg
           
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-8">Explore Our Products</h2>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative rounded-xl bg-gray-50 shadow-sm p-4 flex flex-col items-center"
          >
           
            {product.isNew && (
              <span className="absolute left-2 top-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                NEW
              </span>
            )}
          
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
              
              </button>
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                
              </button>
            </div>
           
            <div className="my-4 h-24 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
         
            {product.button && (
              <button className="bg-black text-white font-bold py-2 w-full rounded-sm mb-3">
                {product.button}
              </button>
            )}
           
            <h3 className="text-sm font-semibold text-center mb-1">{product.name}</h3>
          
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-red-600 font-bold">{product.price}</span>
            </div>
           
            <div className="flex items-center justify-center gap-1 text-sm mb-2">
              {[...Array(product.rating)].map((_, i) => (
                <svg
                  key={i}
                  fill="orange"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                
                >
                  <polygon points="9.9,1.1 12.3,6.6 18,7 13,11.2 14.5,17 9.9,14 5.3,17 6.8,11.2 1.8,7 7.5,6.6"></polygon>
                </svg>
              ))}
              <span className="ml-2 text-gray-400">({product.reviews})</span>
            </div>
            
            <div className="flex space-x-1 mt-2">
              {product.variants.map((color, i) => (
                <span
                  key={i}
               
                />
              ))}
            </div>
          </div>
        ))}
      </div>
   
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
}
