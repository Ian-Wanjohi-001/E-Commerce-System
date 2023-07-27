import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../user/components/auth/Login";
import Checkout from "../user/components/checkout/checkout";
import LandingPage1 from "../user/components/landing-page/Landing-Page-1";
import LandingPage2 from "../user/components/landing-page/LandingPage-2";
import ReviewsPage from "../user/components/landing-page/pages/ReviewsPage";
import ProductPage from "../user/components/products/ProductPage";
import Shop from "../user/components/products/Shop";
import Cart from "../user/components/Cart/Cart";
import CheckoutPayment from "../user/components/checkout/CheckoutPayment";
import Signup from "../user/components/auth/Signup";
import About from "../user/components/landing-page/pages/About";
import AuthLayout from "../layouts/AuthLayout";
import { TopBar } from "../admin/components/TopBar";
import CreateProducts from "../admin/components/CreateProducts";
import Customers from "../admin/Customers";
import Products from "../admin/Products";
import AdminLayout from "../layouts/AdminLayout";
import ProductTable from "../admin/components/ViewProducts";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<ProductTable />} />
        <Route path="create" element={<CreateProducts />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/landingpage1" element={<LandingPage1 />} />
      <Route path="/landingpage2" element={<LandingPage2 />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/payment" element={<CheckoutPayment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />


    </Route>

  )
);
