import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-start-2 col-span-1 flex flex-col items-center justify-center">
        <form className="flex flex-col gap-3 w-[80%]">
          <h1 className="font-bold">Login in SmartBuy</h1>
          <div>
            <h1>Email</h1>
            <input
              className="border w-full p-2 rounded"
              type="text"
              placeholder="Enter Your Email Here"
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              className="border w-full p-2 rounded"
              type="password"
              placeholder="Enter Your Password Here"
            />
          </div>
          <button className="bg-blue-800 text-white rounded p-3 w-full">
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
    </div>
  );
};

export default Login;
