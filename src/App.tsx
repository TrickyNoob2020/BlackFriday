import Navbar from "./modules/Navbar.tsx";
import Main from "./modules/Main.tsx";
import Hero from "./modules/Hero.tsx";
export default function App(){
    return(
        <div className="bg-gray-900 text-yellow-50">
           <Navbar />
           <Hero />
           <br />
           <Main />
        </div>
    )
}