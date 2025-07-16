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
            Welcome to CottonTom, where everyday comfort meets timeless style.
            We believe that the best wardrobe pieces are the ones you reach for
            again and again—the ones that feel as good as they look.
          </p>
          <p>
            Our journey began with a simple idea: to create high-quality,
            versatile apparel crafted from premium cotton, designed to fit
            seamlessly into your life. We are passionate about creating
            foundational styles that serve as the canvas for your personal
            expression.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to elevate your everyday moments through thoughtfully
            designed apparel. We are committed to creating clothing that not
            only stands the test of time in style and durability but is also
            accessible to everyone. We strive to blend classic designs with
            modern comfort, ensuring every piece we make brings you confidence
            and ease.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"COTTONTOM"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-r-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            We are uncompromising when it comes to quality. From sourcing the
            finest, softest cotton to overseeing every stitch, we ensure that
            each garment meets our exacting standards. Our commitment to expert
            craftsmanship means every piece is not only beautiful but also
            durable and built to last, wash after wash.
          </p>
        </div>
        <div className="border border-r-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Finding your perfect style should be effortless. Our website is
            designed to provide a seamless and enjoyable shopping experience,
            with a curated collection of essentials that are easy to browse and
            pair. We handle the details so you can enjoy the convenience of
            having timeless, high-quality apparel delivered directly to your
            door.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Focused: </b>
          <p className="text-gray-600">
            You are at the heart of everything we do. Our goal is to provide an
            exceptional experience from the moment you land on our site to the
            day your order arrives. Our dedicated team is always here to offer
            support, answer questions, and listen to your feedback, ensuring
            your journey with CottonTom is nothing short of wonderful.
          </p>
        </div>
      </div>

      {/*Newsletter sub box already created*/}
      <NewsLetterBox />
    </div>
  );
};

export default About;
