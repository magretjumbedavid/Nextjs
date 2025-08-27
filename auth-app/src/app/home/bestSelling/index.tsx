

import Image from 'next/image'


const products = [
  {
    name: "The north coat",
    image: "/images/jacket.png",
    price: "$260",
    oldPrice: "$360",
    rating: 5,
    reviews: 65,
  },
  {
    name: "Gucci duffle bag",
    image: "/images/bag.avif",
    price: "$960",
    oldPrice: "$1160",
    rating: 5,
    reviews: 65,
  },
  {
    name: "RGB liquid CPU Cooler",
    image: "/images/speaker.jpg",
    price: "$160",
    oldPrice: "$170",
    rating: 5,
    reviews: 65,
  },
  {
    name: "Small BookSelf",
    image: "/images/woodkeeper.webp",
    price: "$360",
    oldPrice: "",
    rating: 5,
    reviews: 65,
  },
]

export default function BestSellers() {
  return (
    <div className="bg-white px-8 py-10 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-red-100 text-red-500 px-3 py-1 rounded-md font-bold text-sm">This Month</span>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition">View All</button>
      </div>
      <h1 className="text-3xl font-semibold mb-6">Best Selling Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-4 relative shadow-sm flex flex-col items-center">
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
               
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              
              </button>
            </div>
            <div className="mb-4 mt-4 h-32 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
            <div className="flex items-center mb-2">
              <span className="text-red-600 text-lg font-bold mr-2">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(product.rating)].map((_, i) => (
                <svg key={i} fill="orange" viewBox="0 0 20 20" className="w-4 h-4" ><polygon points="9.9,1.1 12.3,6.6 18,7 13,11.2 14.5,17 9.9,14 5.3,17 6.8,11.2 1.8,7 7.5,6.6" /></svg>
              ))}
              <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
