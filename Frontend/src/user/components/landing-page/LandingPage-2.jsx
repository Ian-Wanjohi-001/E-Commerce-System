import Header from "../header-footer/header";
import Footer from "../header-footer/footer";
import Page2 from "./pages/page2";
const LandingPage2 = () => {
  return (
    <div className="flex justify-between flex-col">
      <div className="header sticky top-0 left-0 w-full z-50 ">
        <Header />
      </div>

      <div className="page-content  mt-[8rem] border">
        <Page2 />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage2;
