// Hero with text!
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-20 bg-black text-white h-80">
      <div className="divide-y divide-solid">
        <div className="order-2 md:order-1 m-10 p-10">
          <h3 className="text-4xl font-bold text-center whitespace-normal">
              <span style={{ fontSize: '4rem' }}>B</span>lack <span style={{fontSize: '4rem'}}>N</span>ovember
          </h3>
          <hr className="my-2 border-t-4 border-white" />
          <p className="text-lg overflow-hidden">
            Special deals all month long!
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="path_to_your_image.jpg" alt="Image" className="max-w-full" />
      </div>
    </div>
  );
};
export default Hero;
