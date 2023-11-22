// I need navbar with max-width of 1200px
import React from "react";
import '../../src/FontFamily.css';
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center lg:gap-60 gap-1 pt-2 bg-gray-900">
  <div className="flex-grow hover:underline">
    <p className="font-cedarville lg:text-5xl text-3xl sm:pl-4 md:text-3xl animate-bounce">
      Anns Lodge
    </p>
  </div>
  <div className="hidden sm:block hover:text-rose-600 sm:relative top-12 right-28 sm:right-18">
    <h5><span style={{fontWeight: 'lighter', fontSize:'1.2rem', fontFamily:'cursive', wordSpacing:'0.5rem'}}>Black</span>
    <p style={{fontWeight:'bolder', fontSize:'1.8rem', letterSpacing: '0.8rem'}} className="font-lato">November</p></h5>
  </div>
  <div className="ml-auto">
    <button
      className="font-montserrat bg-blue-500 hover:bg-blue-700 hover:font-extrabold lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-2 mt-4 rounded-s-3xl rounded-e-3xl"
      onClick={() =>
        (window.location.href =
          "https://www.annslodgeandcamping.com/wp/anns-lodge")
      }
    >
      Visit Website
    </button>
  </div>
</nav>

  );
};

export default Navbar;
