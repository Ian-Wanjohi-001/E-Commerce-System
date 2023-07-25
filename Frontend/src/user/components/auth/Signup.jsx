import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header-footer/header";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log("User registered successfully:", data);
      // Optionally, you can show a success message or redirect the user to the login page.
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle any errors or show an error message to the user.
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
          <input
            className="border p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-800 text-white rounded p-3" type="submit">
            Create Account
          </button>
        </form>
      </div>
      <Header />
    </div>
  );
};

export default Signup;
