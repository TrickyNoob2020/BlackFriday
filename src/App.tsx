import Navbar from "./modules/Navbar.tsx";
import BlackSale from "./modules/BlackSale.tsx";
import Hero from "./modules/Hero.tsx";
import Food from "./modules/Food.tsx";
export default function App(){
    return(
        <div className="bg-gray-900 text-yellow-50 w-fit">
           <Navbar />
           <br className="my-5" />
           <Hero />
           <br className="my-3" />
           <BlackSale />
           <br className="my-1" />
           <Food />
        </div>
    )
}