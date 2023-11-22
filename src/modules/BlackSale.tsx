// Middleware such as specials of blackSales comes here!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const Main = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h5 className="font-poppins lg:font-extralight lg:text-6xl text-2xl md:text-5xl  underline lg:animate-spin lg:animate-delay-1s lg:hover:text-red-900 hover:ease-in-out my-12">
          Black Sale
        </h5>
      </div>
      <br className="lg:my-5 md:my-3" />
      <div className="flex flex-col md:flex-row justify-center p-10 my-5 lg:gap-60 w-fit">
        <div className="p-2">
          <h5 className="font-lato text-5xl text-left mb-2 underline text-white-500 font-extralight">
            Chalet{" "}
            <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
              {" "}
              With
            </span>{" "}
            Breakfast
          </h5>
          <div className="flex flex-col items-center my-5 max-w-full lg:max-w-md sm:max-lg md:max-w-xs rounded-xl overflow-hidden shadow-lg">
            <img
              className="lg:max-w-full w-72 h-100 md:h-36 object-cover rounded-2xl"
              src="https://i.ibb.co/kGbx5HB/room3.jpg"
              alt="Room Image"
            />
          
            <div className="flex flex-col lg:flex-row px-10 py-10 lg:max-w-full lg:pt-5 lg:pl-10">
              <h5 className="font-extralight font-poppins underline animate-bounce">Per Person Sharing</h5>
              <p className="text-red-500 text-md my-4">Price was N$700</p>
              <p className="text-green-500 text-md m-2 my-5">Now 15% off!</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 lg:rounded-md w-6xl"
                onClick={() =>
                  (window.location.href =
                    "https://www.booking.com/hotel/na/anns-self-catering-and-camping-kamanjab.html")
                }
              >
                Book Now!
              </button>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h5 className="font-lato text-justify text-5xl  mb-2 underline text-white-500 font-extralight">
            Chalet{" "}
            <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
              WithOut
            </span>{" "}
            Breakfast
          </h5>
          <div className="flex flex-col items-center my-5 max-w-full lg:max-w-md sm:max-lg md:max-w-xs rounded-xl overflow-hidden shadow-lg">
            <img
              className="lg:max-w-full w-72 h-100 md:h-36 object-cover rounded-2xl"
              src="https://i.ibb.co/kGbx5HB/room3.jpg"
              alt="Room Image"
            />
            {/* This section is displayed as a column on mobile and as a row on lg screens */}
            <div className="flex flex-col lg:flex-row px-10 py-10 lg:max-w-full lg:pt-5 lg:pl-10">
              <h5 className="font-extralight font-poppins animate-bounce underline ">Per Person Sharing</h5>
              <p className="text-red-500 text-md my-4">Price was N$700</p>
              <p className="text-green-500 text-md m-2 my-5">Now 15% off!</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 lg:rounded-md w-6xl"
                onClick={() =>
                  (window.location.href =
                    "https://www.booking.com/hotel/na/anns-self-catering-and-camping-kamanjab.html")
                }
              >
                Book Now!
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
