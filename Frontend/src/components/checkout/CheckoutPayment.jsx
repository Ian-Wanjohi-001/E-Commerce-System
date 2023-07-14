import paypalImage from "../../assets/paypal.png";
import Header from "../header-footer/header";
const CheckoutPayment = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col pt-[10rem]  items-center ">

          <div className=" font-semibold text-2xl">Checkout</div>
          <div className="flex gap-[4rem] py-5">
            <div className="">Adress </div>
            <div className="">Shipping</div>
            <div className=" font-semibold">Payment</div>
          </div>
          <div className="icons flex gap-[2rem] pb-5">
            <div className="paypal">
              <img
                src={paypalImage}
                alt="paypal logo"
                className=" w-[153px] h-[38px] bg-white border-2"
              />
            </div>
            <div className="apple bg-black w-[153px] h-[38px] text-white text-center text-2xl  ">
              {/* <img src={appleImage} alt="appleImage" /> */}
              Pay
            </div>
          </div>
          <div className=" pb-3">Payment Details</div>
          <input
            type="text"
            placeholder="Cardholder Name"
            className="h-[40px] border border-gray-600 w-[398px]"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="h-[40px] w-[398px] border border-gray-600 "
          />
          <div className="w-[398px] h-[40px] grid grid-cols-3 pb-2">
            <select
              name=""
              id=""
              placeholder="Month"
              className="border border-gray-600"
            >
              <option value="">Month</option>
            </select>
            <select
              name=""
              id=""
              placeholder="Year"
              className="border border-gray-600"
            >
              <option value="">Year</option>
            </select>
            <select name="" id="" className="border border-gray-600">
              <option value="">CVC</option>
            </select>
          </div>
          <div className=" text-gray-600 pb-4">
            save card data for future payments
          </div>
          <button className="w-[397px] h-[50px] bg-black text-white font-bold">
            Pay with card
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPayment;
