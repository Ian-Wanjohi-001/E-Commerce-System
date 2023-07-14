import image2 from "../../assets/IMG-20230711-WA0079.jpg";
const CartBox = () => {
  return (
    <>
      <div className="flex mt-4 border-b border-gray-400 pb-4">
        <img src={image2} className="h-[129px] w-[133px] " alt="img" />
        <div className="flex">
          <div className="text flex flex-col pl-4">
            <div className="title text-lg font-bold">Men's winter jacket</div>
            <div className="size">Size:L</div>
            <div className="size">Quantity:1</div>
            <div className="price text-lg font-bold">$99</div>
          </div>
          <div className=" pl-4 underline h-30 flex flex-col justify-end">
            <p>Remove</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartBox;
