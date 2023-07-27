import four from '../../../assets/4.jpg';
import five from '../../../assets/5.jpeg';
import six from '../../../assets/6.jpg';
import seven from '../../../assets/7.webp';
import eight from '../../../assets/8.jpg';
import nine from '../../../assets/9.jpg';
import ten from '../../../assets/10.webp';
import eleven from '../../../assets/11.jpeg';
import twelve from '../../../assets/12.webp';
import thirteen from '../../../assets/13.webp';
import fourteen from '../../../assets/14.jpeg';
import fifteen from '../../../assets/15.jpg';
import sixteen from '../../../assets/16.jpeg';
import seventeen from '../../../assets/17.webp';
import eighteen from '../../../assets/18.jpeg';
import nineteen from '../../../assets/19.jpg';
import twenty from '../../../assets/20.avif';
import twentyone from '../../../assets/21.jpeg';
import twentytwo from '../../../assets/22.jpeg';
import twentythree from '../../../assets/23.jpeg';
import twentyfour from '../../../assets/24.jpeg';
import twentyfive from '../../../assets/25.avif';
import twentysix from '../../../assets/26.jpg';
import twentyseven from '../../../assets/27.jpg';
import twentyeight from '../../../assets/28.jpeg';
import twentynine from '../../../assets/29.jpg';
import thirty from '../../../assets/30.jpg';
import thirtyone from '../../../assets/31.jpeg';
import hoodie1 from '../../../assets/Hoodie1.jpg'
import hoodie2 from '../../../assets/Hoodie2.jpg'
import jacket1 from '../../../assets/Jacket1.jpg';
import Page1 from "./pages/page1";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from '../header-footer/footer';
import "react-toastify/dist/ReactToastify.css";
import { getAllProducts } from '../../../redux/apiCall';
import {useDispatch, useSelector} from 'react-redux'
import { allProductsSuccess } from '../../../redux/slices/allProductsSlice';
import CircularProgress from '@mui/material/CircularProgress'; 

function LandinPageBody() {
    const { cartItems, addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [loading , setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({
      customerId: localStorage.getItem("customerId") || "",
    });

    const dispatch = useDispatch();
const allProducts = useSelector((state) => state.allProducts?.allProducts);
  

    useEffect(() => {
      // Update local storage whenever the customerId changes
      localStorage.setItem("customerId", userDetails.customerId);
    }, [userDetails.customerId]);
  
  
    const productImageNames = [
      hoodie1, hoodie2,jacket1, four, five, six, seven, eight, nine, ten, eleven,
      twelve,
      thirteen,
      fourteen,
      fifteen,
      sixteen,
      seventeen,
      eighteen,
      nineteen,
      twenty,
      twentyone,
      twentytwo,
      twentythree,
      twentyfour,
      twentyfive,
      twentysix,
      twentyseven,
      twentyeight,
      twentynine,
      thirty,
      thirtyone
    ];
    
  
    const mappedProductData = allProducts?.map((product, index) => {
      const productImageName = productImageNames[index];
      const imageUrl = productImageName;
      return {
        ...product,
        imageUrl // Set the imageUrl instead of productImageName
      };
    });

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data
        getAllProducts(dispatch)
       
          .then(() => {
            dispatch(allProductsSuccess(mappedProductData));
            setLoading(false)}) // Set loading to false when data fetching is complete
          .catch((error) => {
            setLoading(false); // Set loading to false if there's an error
            console.log('Error fetching products:', error);
          });
      }, [dispatch]);
      

          console.log(allProducts)
  console.log(mappedProductData);


    const handleAddToCart = (product) => {
      addToCart(product);
      setCartCount((prevCartCount) => prevCartCount + 1);
      toast.success("Item added to cart successfully");
    };


    return (
        <>
          <Page1 />
          <div className="page-content mt-8rem">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <CircularProgress />
              </div>
            ) : (
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mappedProductData?.map((product) => (
                    <div key={product.ProductID} className="bg-white p-4 shadow">
                      <img
                        src={product.imageUrl}
                        alt={product.ProductName}
                        className="w-full h-40 object-contain mb-4"
                      />
                      <h2 className="text-lg font-bold">{product.ProductName}</h2>
                      <p className="text-gray-500">{product.Description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-lg font-bold">${product.Price}</p>
                        <p className="text-gray-500">
                          In Stock: {product.StockQuantity}
                        </p>
                      </div>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="footer">
            <Footer />
          </div>
          <NavLink to="/cart" className="cart-icon">
            <div className="bag flex gap-2">
              <FaShoppingCart className="h-[25px]" />
              {cartCount}
            </div>
          </NavLink>
        </>
      );
      
}

export default LandinPageBody;
