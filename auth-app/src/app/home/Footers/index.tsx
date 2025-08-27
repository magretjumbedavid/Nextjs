import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-2">Exclusive</h3>
          <div className="mb-2 font-semibold">Subscribe</div>
          <p className="text-sm text-gray-400 mb-3">Get 10% off your first order</p>
          <form className="flex items-center">
            <input
              className="bg-gray-900 text-white px-4 py-2 rounded-l outline-none w-40 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-white text-black px-3 py-2 rounded-r"
              aria-label="Submit email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
       
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <p className="text-sm mb-1 text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mb-1 text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Quick Link</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
       
        <div>
          <h4 className="font-semibold mb-2">Download App</h4>
          <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center mb-2 gap-2">
            <Image src="/images/scan.jpeg" alt="QR code" width={60} height={60} className="rounded bg-white" />
            <div>
              <a href="#" className="block mb-1">
                <Image src="/images/chrome.jpg" alt="Google Play" width={80} height={24} />
              </a>
              <a href="#" className="block">
                <Image src="/images/apple.jpg" alt="App Store" width={80} height={24} />
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-white">
                <path d="M22 12A10 10 0 1 0 2 12c0 5 3.7 9.13 8.44 9.94v-7.04H7.89v-2.9h2.55V9.65c0-2.52 1.46-3.9 3.7-3.9 1.07 0 2.19.19 2.19.19v2.41h-1.23c-1.21 0-1.59.75-1.59 1.52v1.83h2.71l-.43 2.9h-2.28v7.04C18.3 21.13 22 17 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-white">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .96-3.13 1.18A4.92 4.92 0 0 0 16.67 3c-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13C7.69 8.87 4.07 6.91 1.64 3.95c-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18a4.93 4.93 0 0 1-2.24-.62v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.86.18-1.31.18-.32 0-.63-.03-.93-.08.64 1.98 2.5 3.42 4.7 3.46A9.87 9.87 0 0 1 0 21.54a13.93 13.93 0 0 0 7.56 2.22c9.05 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A10.05 10.05 0 0 0 24 4.56z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5zm4.5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-white">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.07-.93-1.5-1.5-1.5-.57 0-1.5.43-1.5 1.5v4.5h-3v-9h3v1.2c.58-.88 1.61-1.2 2.5-1.2 1.93 0 3.5 1.57 3.5 3.5v5.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-5 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}