import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />

        {/*direction is col so justify center align center vertically */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            ducimus distinctio ad itaque cupiditate veniam error voluptatibus
            placeat totam velit ea, incidunt eum omnis amet odio similique,
            porro excepturi dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit
            deleniti ipsam corrupti tempore expedita culpa earum aperiam? Eius
            illo eos dolore, quia similique quod ratione rem est ducimus vero!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reiciendis asperiores harum, in nostrum minima molestiae, omnis,
            perspiciatis alias adipisci
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"COTTONTOM"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            corporis, temporibus eaque animi labore reiciendis! Id molestiae
            dignissimos voluptate! Dicta at tempore soluta eum porro aliquam
            dolores numquam, inventore hic.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            corporis, temporibus eaque animi labore reiciendis! Id molestiae
            dignissimos voluptate! Dicta at tempore soluta eum porro aliquam
            dolores numquam, inventore hic.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Focused: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            corporis, temporibus eaque animi labore reiciendis! Id molestiae
            dignissimos
          </p>
        </div>
      </div>

      {/*Newsletter sub box already created*/}
      <NewsLetterBox />
    </div>
  );
};

export default About;
