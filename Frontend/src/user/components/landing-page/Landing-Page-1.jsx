import LandinPageBody from "./LandinPageBody";
import Footer from "../header-footer/footer";
import Header from "../header-footer/header";


const LandingPage1 = () => {


  return (
    <div className="flex justify-between min-h-screen flex-col bg-blue-50">
      <div className="header sticky top-0 left-0 w-full z-50">
        <Header />
      </div>
     <LandinPageBody />
    </div>
  );
};

export default LandingPage1;
