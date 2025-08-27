

"use client";


export default function Navbar() {
  return (
    <header>
      <div className="w-full bg-black text-white text-sm flex items-center justify-between px-6 py-1 pl-66">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!&nbsp;
          <span className="font-semibold underline cursor-pointer">ShopNow</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>English</span>
          </div>
      </div>
      <nav className="w-full bg-white flex flex-col md:flex-row md:items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="font-bold text-xl mr-12">Exclusive</span>
          <ul className="flex items-center space-x-8 font-medium text-md">
            <li>
              <a href="" className="relative after:block after:bg-black after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-0 ml-67">
                Home
              </a>
            </li>
            <li><a href="">Contact</a></li>
            <li><a href="FlashSales">About</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-3 md:space-x-5 ml-60">
     
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-md px-4 py-2 pl-4 pr-10 text-sm outline-none"
            />
            
          </div>
          
          <button className="p-2">
            
          </button>
          <button className="p-2">
          </button>
        </div>
      </nav>
    </header>
  )
}
