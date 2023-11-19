// Middleware such as specials of blackSales comes here!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from 'react';

const Main =() => {
  return (
    <>
      <div className="text-center mb-8">
        <h5 className="text-3xl font-bold underline animate-spin lg:hover:text-black my-12">Black Sale</h5>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-10 my-5 gap-10 max-w-full">
        <div className="p-2">
          <h5 className="text-5xl text-left mb-2 underline text-white-500 font-extralight">
            Chalet{" "}
            <span style={{ fontSize: "3rem", fontWeight: "bolder" }}> With</span> Breakfast
          </h5>
          <div className="flex items-center my-12 max-w-md md:max-w-xs rounded overflow-hidden shadow-lg">
            {/* Replace "#" with the actual image source */}
            <div className=''>
            <img
              className="w-full h-100 md:h-36 object-fill rounded-2xl"
              src="/src/assets/Rooms/room3.jpeg"
              alt="Room Image"
            />
            </div>
            <div className="px-5 py-4 w-full">
              <h5 className="font-extralight underline">Per Person Sharing</h5>
              <p className="text-red-500 text-md my-4">Price was N$900</p>
              <p className="text-green-500 text-md m-2 my-5">Now 15% off!</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => (window.location.href = "https://www.booking.com/hotel/na/anns-self-catering-and-camping-kamanjab.html")}>
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h5 className="text-5xl text-left mb-2 underline text-white-500 font-extralight">
            Chalet{" "}
            <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>WithOut</span> Breakfast
          </h5>
          <div className="flex items-center my-12 max-w-md md:max-w-xs rounded overflow-hidden shadow-lg">
            <img
              className="w-full h=64 md:h-36 object-cover rounded-2xl"
              src="/src/assets/Rooms/room3.jpeg"
              alt="Room Image"
            />
            <div className="px-5 py-4 w-full">
              <h5 className="font-extralight underline">Per Person Sharing</h5>
              <p className="text-red-500 text-md my-4">Price was N$700</p>
              <p className="text-green-500 text-md m-2 my-5">Now 15% off!</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => (window.location.href = "https://www.booking.com/hotel/na/anns-self-catering-and-camping-kamanjab.html")}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default Main;
