const Bush = () => {
  return (
    <div className="text-center my-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">🌟 Unbeatable BlackSale! <strong className="underline font-extrabold font-crimson text-6xl">Camping Site</strong> 🌟</h1>
    <p className="text-xl text-gray-600 mb-6">Embark on a budget-friendly adventure! 🏕️</p>
    <p className="text-lg text-green-500 mb-2">Adults: Was N$150, Now 10% Off! 🌈</p>
    <p className="text-lg text-blue-500 mb-2">Children 0-6: Free 🎉</p>
    <p className="text-lg text-purple-500 mb-6">Children 7-11: Only <strong className="font-extrabold">N$80</strong> 💼</p>
    <p className="text-lg text-red-500 font-bold">Limited Time Offer - Seize the Savings! 🔥</p>
    <button
                className="bg-red-500 hover:bg-red-700 text-white my-20 lg:text-4xl text-3xl font-bold py-2 px-4 lg:rounded-md w-6xl rounded-e-4xl rounded-s-3xl rounded-4xl" 
                onClick={() =>
                  (window.location.href =
                    "https://www.booking.com/hotel/na/anns-self-catering-and-camping-kamanjab.html")
                }
              >
                Book Now!
              </button>
</div>

  );
};
export default Bush;
