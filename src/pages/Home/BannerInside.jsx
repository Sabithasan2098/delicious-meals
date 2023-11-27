const BannerInside = () => {
  return (
    <div className="pr-[700px] text-left pl-10 space-y-5 absolute bottom-72">
      <h1 className=" text-yellow-300 text-5xl font-extrabold">
        Delightful Flavors Await You
      </h1>
      <p className="text-xl font-bold text-yellow-400">
        Explore a world of exquisite tastes at Delicious. Indulge in a culinary
        journey that promises to delight your senses with our curated selection
        of delectable dishes. Uncover the art of fine dining and savor every
        moment of gastronomic bliss with us.
      </p>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BannerInside;
