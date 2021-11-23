import { useState } from "react";
import axios from "axios";
import logo from "./logo.png"
import smallLogo from "./redflix-logo-small.png"
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center">
            <div className="flex flex-col w-2/3 md:w-1/3 border border-red-500 items-center p-2 text-center rounded-lg">
               <img src={logo} alt="logo" className="hidden sm:block w-40 my-2"/>
               <img src={smallLogo} alt="logo" className="block sm:hidden w-8 my-2"/>
               <p className="text-white text-md subpixel-antialiased mb-2">Forgot password</p>
               <p className="text-white text-sm subpixel-antialiased mb-2">Please enter the email address you register your account with. We will send you reset password confirmation to this email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" className="rounded-md border-2 border-red-500 mb-2 p-2 w-4/5 md:w-2/3 outline-none"></input>
                {error && <span className="text-red-600 text-md subpixel-antialiased mb-2">{error}</span>}
                {success && <span className="text-white text-md subpixel-antialiased mb-2">{success}</span>}
                <button onClick={forgotPasswordHandler} className=" subpixel-antialiased border border-red-500 rounded-md text-md sm:text-xl text-red-500 px-2 py-1 hover:bg-red-500 hover:text-black m-2 transform duration-150 ease-in-out">Send mail</button>
            </div>
        </div>
  );
};

export default ForgotPasswordScreen;