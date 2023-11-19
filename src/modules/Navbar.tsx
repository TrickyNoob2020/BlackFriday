// I need navbar with max-width of 1200px
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center gap-52 items-center p-4 bg-gray-900">
  <div className="lg:text-5xl md:text-3xl sm:text-2xl font-bold flex-grow">
    Anns Lodge
  </div>
  <div className="ml-auto">
    <button
      className="bg-blue-500 hover:bg-blue-700 lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-4 mt-4"
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
