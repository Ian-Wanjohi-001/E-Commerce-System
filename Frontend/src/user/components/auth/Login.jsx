import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header-footer/header";
import * as yup from "yup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ email, password }); // Validate the form data

      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Logged in successfully:", data);
        toast.success("Logged in successfully");
        navigate("/landingpage1"); // Navigate to the landing page after successful login
      } else {
        console.error("Error logging in:", data);
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast.error(error.message);
    }
  };

  return (
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
  );
};

export default Login;
