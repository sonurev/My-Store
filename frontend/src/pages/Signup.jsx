import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [user,setUser] = useState([]);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:8000/api/users/signup", {
        fullName,
        email,
        password,
        mobileNumber,
      });
      
     console.log(response.data);
      // If signup is successful, navigate to the home page
      navigate("/");
    } catch (error) {
      console.log("Error in signup route:", error);
    }
  };

  return (
    <div>
      <div className=" w-screen fixed top-0">
        <Appbar />
      </div>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-pink-600">Sign up</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="John123@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="123456"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                type="tel"
                autoComplete="tel"
                required
                placeholder="•••••••••••"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500 sm:text-sm"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Sign up
            </button>
            <div className="text-sm text-center">
              <p>
                Already have an account? <Link to="/login" className="underline">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
