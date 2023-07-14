const Footer = () => {
  return (
    <>
      <div className="footer h-[360px] border text-center w-full sm:flex sm:justify-around justify-center items-center bg-white  bottom-0">
        <div className="shop">
          <div className="title font-semibold mb-3">Shop</div>
          <div className="shop-list">
            <ul className="text-gray-500">
              <li>Women's</li>
              <li>Men's</li>
              <li>Kid's</li>
              <li>Shoes</li>
              <li>Equipment</li>
              <li>By Activity</li>
              <li>Gift Cards</li>
              <li>Sale</li>
            </ul>
          </div>
        </div>
        <div className="help">
          <div className="title font-semibold mb-3">Help</div>
          <div className="help-list">
            <ul className="text-gray-500">
              <li>Help Center</li>
              <li>Order Status</li>
              <li>Size Chart</li>
              <li>Returns & Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="about">
          <div className="title font-semibold mb-3 ">About</div>
          <div className="about-list">
            <ul className=" text-gray-500">
              <li>About Us</li>
              <li>Responsibility</li>
              <li>Technology & Innovation</li>
              <li>Explore our stories</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
