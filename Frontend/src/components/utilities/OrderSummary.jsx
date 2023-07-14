const Order = () => {
  return (
    <>
      <div className="flex flex-col pl-[225px] pt-0 mt-0">
        <div className="title text-xl font-bold pb-4">Order Summary</div>
        <input
          type="text"
          className=" w-[398px] h-[40px] pb-3 border border-gray-500"
        />
        <div className="flex pb-2 pt-5 justify-between">
          <p>Subtotal</p>
          <p className=" font-semibold">$200</p>
        </div>
        <div className="border-b-2 border-gray-400 flex justify-between pb-6">
          <p>Shipping</p>
          <p className="  text-gray-500">Calculated at the next step</p>
        </div>
        <div className="flex pb-5 justify-between pt-2">
          <p>Total</p>
          <p className=" font-semibold">$200</p>
        </div>
        <button className="w-[397px] h-[50px] bg-black text-white font-bold">
          Continue to checkout
        </button>
      </div>
    </>
  );
};
export default Order;
