const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault(); //dont reload web
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 15% off
      </p>
      <p className="text-gray-400 mt-3">
        Never miss a drop. Get the best of CottonTom, straight to your inbox.
      </p>
      <form
        onSubmit={onSubmitHandler} //onsubmit send event as first argument
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
