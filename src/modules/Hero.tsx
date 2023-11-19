import CountDown from './CountTracker.tsx';
const Hero = () => (
  <div className=" bg-black lg:my-15 sm:my-10 lg:h-96 sm:h-20 bg-center pt-24 text-center">
    <div className="text-left relative left-20">
      <h5 className="lg:text-4xl sm:text-2xl">Black Friday Count Down:</h5>
    </div>
    <div className="">
    <CountDown />
    </div>
  </div>
);

export default Hero;
