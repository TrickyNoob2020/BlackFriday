import Navbar from "./modules/Navbar.tsx";
import Hero from "./modules/Hero.tsx";
import BlackSale from "./modules/BlackSale.tsx";
import Bush from "./modules/Bush.tsx";
import Food from "./modules/Food.tsx";
import Gallery from "./modules/Gallery.tsx";
export default function App(){
    return(
        <div className="bg-gray-900 text-yellow-50 w-fit">
           <Navbar />
           <br className="my-5" />
           <Hero />
           <br className="my-3" />
           <BlackSale />
           <br className="my-1" />
           <hr className="my-10" />
           <Bush />
           <br className="my-2" />
           <Food />
           <br className="my-2"/>
           <hr className="my-10" />
           <Gallery />
        </div>
    )
}