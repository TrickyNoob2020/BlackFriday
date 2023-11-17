// Middleware such as specials of blackSales comes here!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const Main = () => {
  return (
    <>
      <div className="flex justify-around m-4">
        {/* First div */}
        <div className="w-1/3 p-4 border">
          <div className="flex flex-row justify-between mb-4">
            <div className="p-2 border">Container 1, Item 1</div>
            <div className="p-2 border">Container 1, Item 2</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="p-2 border">Container 1, Item 3</div>
            <div className="p-2 border">Container 1, Item 4</div>
          </div>
        </div>

        {/* Second div */}
        <div className="w-1/3 p-4 border">
          <div className="flex flex-row justify-between mb-4">
            <div className="p-2 border">Container 2, Item 1</div>
            <div className="p-2 border">Container 2, Item 2</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="p-2 border">Container 2, Item 3</div>
            <div className="p-2 border">Container 2, Item 4</div>
          </div>
        </div>

        {/* Third div */}
        <div className="w-1/3 p-4 border">
          <div className="flex flex-row justify-between mb-4">
            <div className="p-2 border">Container 3, Item 1</div>
            <div className="p-2 border">Container 3, Item 2</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="p-2 border">Container 3, Item 3</div>
            <div className="p-2 border">Container 3, Item 4</div>
          </div>
        </div>
      </div>
      
    </>
  );
};


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default Main;