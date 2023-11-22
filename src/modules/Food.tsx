const Food = () => {
  return (
    <div className="flex justify-center items-center text-white mt-3">
      <div className="text-center">
        <h2 className="font-pacifico lg:text-5xl md:text-4xl text-3xl sm:text-3xl underline font-bold mb-4 opacity-0 animate-pulse">
          Food & Beverages
        </h2>
        <hr className="my-10" />
        <div className="lg:text-3xl md:text-2xl sm:text-sm lg:font-serif sm:font-extrathin ">
          <p style={{ fontSize: "3rem" }}>Welcome to our Food & Beverages</p>
          <br />
          <p className="font-oswald lg:text-4xl text-2xl">
          Delight in a culinary experience with a variety of dishes. 
          Enjoy complimentary beverage choices, including <strong className="underline lg:text-4xl md:text-2xl text-4xl sm:text-md">Free beer and cider</strong>. 
          Adults receive a 10% discount on Lunch and Dinner, and children aged 0-11 dine for free. 
          Cheers to unforgettable dining moments!
          </p>
          <hr className="my-3" style={{color: 'red'}} />
        </div>
        <p className="lg:text-3xl md:text-2xl sm:text-sm">
          Make your reservation, please call:{" "}
          <strong className="underline lg:text-3xl md:text-2xl sm:text-md">
            0813211701
          </strong>{" "}
          or email:{" "}
          <strong className="underline lg:text-3xl md:text-md sm:text-md">
            strausswilna@gmail.com
          </strong>
        </p>
        <div className="flex flex-row my-10 justify-center gap-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-6 mt-6 rounded-s-3xl rounded-e-3xl"
            onClick={() => (window.location.href = "tel:0813211701")}
          >
            Call Reservation
          </button>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-2 mt-6 rounded-s-3xl rounded-e-3xl"
            onClick={() =>
              (window.location.href = "mailto:strausswilna@gmail.com")
            }
          >
            Email Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
