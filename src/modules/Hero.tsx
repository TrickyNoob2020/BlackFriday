import CountDown from './CountTracker.tsx';
const Hero = () => (
  <div className=" bg-black lg:my-15 my-10 sm:my-15 sm:my-10 sm-h-96 lg:h-96  bg-center pt-24 text-center">
    <div className="text-left relative bottom-10  lg:bottom-11 left-10">
      <h5 className="lg:text-4xl text-2xl underline-offset-auto sm:text-3xl font-lato lg:hover:text-5xl lg:hover:text-orange-600">Black Friday Count Down:</h5>
    </div>
    <div className="text-left relative lg:bottom-12 lg:left-5 mt-12  font-montserrat">
    <CountDown />
    </div>
  </div>
);

export default Hero;
