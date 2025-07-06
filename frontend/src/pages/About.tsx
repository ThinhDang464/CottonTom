import { assets } from "../assets/assets";
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
        </div>
      </div>
    </div>
  );
};

export default About;
