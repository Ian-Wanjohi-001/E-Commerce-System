import CartBox from "../utilities/CartBox";
import Header from "../header-footer/header";

const Checkout = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center pt-10 h-screen">
        <div className="font-semibold text-2xl p-5">Checkout</div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-xl font-semibold mb-3">Your Cart</h2>
            <CartBox />
            <CartBox />
          </div>
          <button className="w-full py-3 bg-blue-500 text-white font-bold rounded">
            Continue to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
