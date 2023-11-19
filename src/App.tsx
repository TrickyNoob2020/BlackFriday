import Navbar from "./modules/Navbar.tsx";
import Main from "./modules/Main.tsx";
import Hero from "./modules/Hero.tsx";
import Food from "./modules/Food.tsx";
export default function App(){
    return(
        <div className="bg-gray-900 text-yellow-50 scroll-m-64">
           <Navbar />
           <br className="my-5" />
           <Hero />
           <br className="my-5" />
           <Main />
           <br className="my-5" />
           <Food />
        </div>
    )
}