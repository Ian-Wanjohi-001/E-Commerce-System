import CartBox from "../utilities/CartBox";
import Order from "../utilities/OrderSummary";
import Header from "../header-footer/header";
const Cart = () => {
  return (
    <>
      <div className=" p-[4rem] flex flex-col">
        <div className="">
        </div>
        <div className=" text-2xl font-semibold pt-10">Your cart</div>
        <div className="">Not ready to checkout? Continue Shopping</div>
        <div className="content flex">
          <div className="products">
            <CartBox />
          </div>
          <div className="order">
            <Order />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
