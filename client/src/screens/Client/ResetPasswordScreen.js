import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo from "../../components/images/logo.png";
import smallLogo from "../../components/images/logo.png";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { res_token } = useParams();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }
    const tok = res_token;
    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${tok}`,
        {
          password,
        },

        config
      );

      window.location.href = "/login";
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="flex bg-black h-screen w-screen items-center justify-center">
        <div className="flex flex-col w-4/5 sm:w-2/5 border border-red-500 items-center p-1 text-center rounded-lg">
          <img src={logo} alt="logo" className="hidden sm:block w-40 my-2" />
          <img
            src={smallLogo}
            alt="logo"
            className="block sm:hidden w-8 my-2"
          />
          <p className="text-white text-sm subpixel-antialiased mb-2">
            Forgot password
          </p>
          <div className="flex flex-col justify-start text-left w-4/5">
            <p className="text-white text-md subpixel-antialiased mb-2">
              New Password
            </p>
            <input
              type="text"
              placeholder="New password"
              className="rounded-md border-2 border-red-500 mb-2 p-1  outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="text-white text-md subpixel-antialiased mb-2">
              Confirm Password
            </p>
            <input
              type="text"
              placeholder="re-enter password"
              className="rounded-md border-2 border-red-500 mb-2 p-1 outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            ></input>
          </div>
          {error && <span className="text-red-600 text-md subpixel-antialiased mb-2">{error} </span>}
          {success && (
            <span className="text-green-600 text-md subpixel-antialiased mb-2">
              {success} <Link to="/login">Login</Link>
            </span>
          )}
          <button
            onClick={resetPasswordHandler}
            className=" subpixel-antialiased border border-red-500 rounded-md text-md sm:text-xl text-red-500 px-2 py-1 hover:bg-red-500 hover:text-black m-2 transform duration-150 ease-in-out"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
