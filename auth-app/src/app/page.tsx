import Image from "next/image";
import Navbar from "./home/Navibars"
import Signup from "./signup/page"
import Login from "./login/page";
import BannerWithSidebar from "./home/Bestcategory";
import FlashSales from "./home/Flashsales";
import Browse from "./home/Browse";
import BestSellers from "./home/bestSelling";
import HeroSection from "./home/Categories";
import ProductsSection from "./home/OurProducts";
import NewArrivalSection from "./home/Arrival";
import Footer from "./home/Footers";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <BannerWithSidebar/>
      <FlashSales/>
      <Browse/>
      <BestSellers/>
      <HeroSection/>
      <ProductsSection/>
      <NewArrivalSection/>
      <Footer/>
    
    
      
   

    </div>
  );
}
