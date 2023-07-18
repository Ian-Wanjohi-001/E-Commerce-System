import Header from "../header-footer/header";
const Signup = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-start-2 col-span-1 flex flex-col items-center justify-center">
        <form className="flex flex-col gap-3 w-[80%]">
          <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
          <input className="border p-2" type="text" placeholder="Username" />
          <input className="border p-2" type="text" placeholder="Email" />
          <input className="border p-2" type="password" placeholder="Password" />
          <button className="bg-blue-800 text-white rounded p-3">Create Account</button>
        </form>
      </div>
      <Header/>
    </div>
  );
};

export default Signup;
