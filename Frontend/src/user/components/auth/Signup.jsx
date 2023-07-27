import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup"; // Import yup
import Header from "../header-footer/header";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ username, email, password }); // Validate the form data

      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log("User registered successfully:", data);
        toast.success("User registered successfully");
        navigate("/login"); // Navigate to the login page after successful registration
      } else {
        console.error("Error registering user:", data);
        if (data.error === "User already exists") {
          toast.error("User already exists. Please use a different email.");
        } else {
          toast.error("Error registering user. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-start-2 col-span-1 flex flex-col items-center justify-center">
        <form className="flex flex-col gap-3 w-[80%]" onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
          <input
            className="border p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Display validation error message */}
          <p className="text-red-500">{validationSchema.errors?.username?.message}</p>
          <input
            className="border p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Display validation error message */}
          <p className="text-red-500">{validationSchema.errors?.email?.message}</p>
          <input
            className="border p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Display validation error message */}
          <p className="text-red-500">{validationSchema.errors?.password?.message}</p>
          <button className="bg-blue-800 text-white rounded p-3" type="submit">
            Create Account
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Header />
    </div>
  );
};

export default Signup;
