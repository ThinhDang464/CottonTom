import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    //justify around distributes items evenly by giving ech item equal amount of space left and right, justify center would treat them like 1 block squish together
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        {/*center img based on parent div */}
        <img className="w-12 mb-5 m-auto" src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">Hassle free exchange policy</p>
      </div>
      <div>
        {/*center img based on parent div */}
        <img className="w-12 mb-5 m-auto" src={assets.quality_icon} alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">7 days free return policy</p>
      </div>
      <div>
        {/*center img based on parent div */}
        <img className="w-12 mb-5 m-auto" src={assets.support_img} alt="" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">24/7 phone and chat support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
