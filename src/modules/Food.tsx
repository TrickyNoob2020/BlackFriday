const Food =() =>{
    return(
    <div className="flex justify-center items-center text-white mt-3">
        <div className="text-center">
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl underline font-bold mb-4 opacity-0 animate-pulse">Food & Beverages</h2>
          <hr className='my-10'/>
          <p className='lg:text-3xl md:text-2xl sm:text-sm lg:font-serif sm:font-extrathin '>
          <span style={{fontSize:'3rem'}}>Welcome to our Food & Beverages</span>  Enjoy a delightful dining experience with a variety
          of culinary delights. Lunch and Dinner for adults are 10% off, and children aged 0-11 dine for free.
          </p>
          <p className='lg:text-3xl md:text-2xl sm:text-sm'>
          Make your reservation, please call: <strong className="underline lg:text-3xl md:text-2xl sm:text-md">0813211701</strong> or email:{' '}
          <strong className="underline lg:text-3xl md:text-md sm:text-md">strausswilna@gmail.com</strong>
          </p>
          <div className="flex flex-row my-10 justify-center gap-10">
          <button
          className="bg-blue-500 hover:bg-blue-700 lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-4 mt-4"
          onClick={() => window.location.href = "tel:0813211701"}
        >
          Call Reservation
        </button>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 lg:text-2xl md:text-md sm:text-sm text-white font-bold py-2 px-4 mt-4"
          onClick={() => window.location.href = "mailto:strausswilna@gmail.com"}
        >
          Email Reservation
        </button>
        </div>
        </div>
      </div>
    );
}

export default Food;