import Header from "../header-footer/header";
import Footer from "../header-footer/footer";
const ProductPage = () => {
  return (
    <div className="flex justify-around p-[5rem]">
      <div className="">
        <Header />
      </div>
      <div className=" pt-10">
        <img
          className="h-[40%] "
          src="https://thursdayboots.com/cdn/shop/products/1024x1024-Mens-Jacket-Keanu-Black-110221-2.jpg?v=1636392243"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 pt-7">
        <h1 className="font-bold text-2xl">Mens Winter Jacket</h1>
        <p>$99</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque
          est assumenda ad, officiis rem.
        </p>
        <div className="flex gap2 border justify-between w-[20%] p-2">
          <p>-</p>
          <p>2</p>
          <p>+</p>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="flex gap-2 text-white">
          <button className="bg-black rounded-[5px] p-3">Add to cart </button>
          <button className="bg-blue-500  rounded-[5px] p-3">Buy Now</button>
        </div>
      </div>
      <div className=" bottom-0 absolute w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
