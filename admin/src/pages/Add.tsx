import { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
              className="cursor-pointer w-20"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
              className="cursor-pointer w-20"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} //display image when uploaded
              alt=""
              className="cursor-pointer w-20"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
              className="cursor-pointer w-20"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      {/*Form detail*/}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2" //border customization for all input in index.css save time
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2" //border customization for all input in index.css save time
          placeholder="Write content here"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-2 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Sub-category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-2 py-2"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="betseller">
          Add to bestseller
        </label>
      </div>

      <button
        className="cursor-pointer py-3 mt-4 bg-black text-white w-28"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
