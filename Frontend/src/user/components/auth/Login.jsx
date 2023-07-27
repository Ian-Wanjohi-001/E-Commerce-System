import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../header-footer/header";
import * as yup from "yup";
import { loginUser } from "../../../redux/apiCall";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });
  validationSchema.validate({ email, password }); // Validate the form data

 const userData = { email, password };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    console.log(userData);
    const success = await loginUser(dispatch, userData);
    console.log(success)
    if (success) {
      navigate('/landingPage1');
    }
    setIsLoading(false); 
  };

  return (<>
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-start-2 col-span-1 flex flex-col items-center justify-center">
        <form className="flex flex-col gap-3 w-[80%]" onSubmit={handleLogin}>
          <h1 className="font-bold">Login in SmartBuy</h1>
          <div>
            <h1>Email</h1>
            <input
              className="border w-full p-2 rounded"
              type="text"
              placeholder="Enter Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              className="border w-full p-2 rounded"
              type="password"
              placeholder="Enter Your Password Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-blue-800 text-white rounded p-3 w-full" type="submit">
            Login
          </button>
          <p className="font-bold">
            Don't have an account yet?
            <Link className="text-blue-500 text underline" to="/signup">
              Sign up here
            </Link>{" "}
          </p>
        </form>
      </div>
      <Header />
    </div>
<ToastContainer />
    </>
  );
};

export default Login;
