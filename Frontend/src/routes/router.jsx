import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../components/auth/Login";
import Checkout from "../components/checkout/checkout";
import LandingPage1 from "../components/landing-page/Landing-Page-1";
import LandingPage2 from "../components/landing-page/LandingPage-2";
import ReviewsPage from "../components/landing-page/pages/ReviewsPage"
import ProductPage from "../components/products/ProductPage";
import Shop from "../components/products/Shop";
import Cart from "../components/Cart/Cart";
import CheckoutPayment from "../components/checkout/checkoutPayment";
import Signup from "../components/auth/Signup";
import About from "../components/landing-page/pages/About"
export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage1 />} />,
    <Route path="/landingpage1" element={<LandingPage1 />} />,
    <Route path="/landingpage2" element={<LandingPage2 />} />,
    <Route path="/reviews" element={<ReviewsPage />} />,
    <Route path="/product" element={<ProductPage />} />,
    <Route path="/shop" element={<Shop />} />,
    <Route path="/cart" element={<Cart />} />,
    <Route path="/checkout" element={<Checkout />} />,
    <Route path="/checkout/payment" element={<CheckoutPayment />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/signup" element={<Signup />} />,
    <Route path="/about" element={<About />} />,

  ])
);
