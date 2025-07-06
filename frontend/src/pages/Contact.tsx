import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full max-w-[480px]" src={assets.contact_img} alt="" />
        {/*items start on col make sure items align to the left */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            127 North Stt <br /> Suite 420, Melbourne, Australia
          </p>
          <p className="text-gray-500">
            Tel: (420) 555-0696 <br /> Email: thinhd646@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600 cursor-pointer">
            Careers at CottonTom
          </p>
          <p className="text-gray-500">
            Learn more about our team and job oppotunities
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-400">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
