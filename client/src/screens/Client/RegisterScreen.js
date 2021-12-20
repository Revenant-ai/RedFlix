import { useState } from "react";
import "../../index.css";
import logo from "../../components/images/logo.png";
import {Link} from "react-router-dom";
import { registerApi } from "../../services/AuthService";
;

const RegisterScreen = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirm_password,setConfirmPassword]=useState("")
  const [error,setError]=useState("")
  const [theater_name,setTheater_name]=useState("")
  const [theater_address,setTheaterAddress]=useState("")
  const [theater_city,setTheaterCity]=useState("Ahmedabad")


  const registerHandler = async (e) => {
    e.preventDefault();
   
    
    if (password !== confirm_password) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await registerApi(
        {
          email,
          password,
          theater_name,
          theater_address,
          theater_city, 
        }
      );

      localStorage.setItem("authToken", data.token);

      window.location.href = "/login";
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div class="w-full bg-black h-screen">
      <form onSubmit={registerHandler} class="mx-auto max-w-7xl  flex h-screen">
        <div class="flex flex-col lg:flex-row">
          <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-black border-red-600  to-gray-100">
            <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div class="relative">
                  <p class="mb-2 font-medium text-red-600 uppercase">
                    {" "}
                    We got you covered,
                  </p>
                  <img src={logo} alt="Workflow" class="px-20 py-5" />
                </div>
                <p class="text-2xl text-red-600">
                  Want to book Movie tickets from the comfort of your seat sign
                  up get started and earn exciting rewards as well.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
           

              <h4 class="w-full text-3xl font-bold">Signup</h4>
              <p class="text-lg text-gray-500">
                or, if you have an account you can{" "}
                <span class="text-red-600 underline">
                  <Link to="/login">Login</Link>
                </span>
              </p>
              <div class="relative w-full mt-10 space-y-8">
                <div class=" relative ">
                  <label for="required-email" class="text-gray-700">
                    Email
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div class=" relative ">
                  <label for="required-email" class="text-gray-700">
                    Password
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="password"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="email"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>

                <div class=" relative ">
                  <label for="required-email" class="text-gray-700">
                    Confirm Password
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="password"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="email"
                    placeholder="Confirm your password"
                    value={confirm_password}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>

                <div class=" relative">
                  <label for="required-email" class="text-gray-700">
                    Theater Name
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="theater_name"
                    placeholder="Enter the name of the theater"
                    value={theater_name}
                    onChange={(e)=>setTheater_name(e.target.value)}
                  />
                </div>


                <div class=" relative">
                  <label for="required-email" class="text-gray-700">
                    Theater Address
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="theater_name"
                    placeholder="Enter the Address of the theater"
                    value={theater_address}
                    onChange={(e)=>setTheaterAddress(e.target.value)}
                  />
                </div>



                <div class="relative">
                  <button 
                   
                    class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-red-600 rounded-lg hover:bg-red-800 ease">
                    Create Account
                  </button>
                </div>
                {error && <span class="text-red-500">{error}</span>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
