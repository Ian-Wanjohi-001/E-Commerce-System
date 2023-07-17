import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <div className="bg-black text-white px-5 py-7">
        <div className=" w-[50%]">
          <h1 className="font-bold text-2xl">Shop Men's</h1>
          <p>
            Revamp your life with the latest designer trandes in mens clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeline pieces.
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h1>Filters</h1>
          </div>
          <select className="border w-[10%] mb-3" name="" id=""></select>
        </div>
        <div className="flex justify-between">
          <div>
            <h1>Categories</h1>
            <p>
              <span>
                <input type="checkbox" />
              </span>
              Jackets
            </p>
            <p>
              <span>
                <input type="checkbox" />
              </span>
              Shirts
            </p>
            <p>
              <span>
                <input type="checkbox" />
              </span>
              Sweaters
            </p>
            <p>
              <span>
                <input type="checkbox" />
              </span>
              Jackets
            </p>
          </div>
          <div className="grid grid-cols-6 gap-3 ">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
