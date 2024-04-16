import { Appbar } from "../components/Appbar";
import { Link,useNavigate } from "react-router-dom"


export const Login = () => {

  const navigate = useNavigate();

 async  function handleLogin(){
  try{
    const response = await axios
      .post("http://localhost:8000/api/users/login", {
        email,
        password
      })
     console.log(response.data);
      navigate("/");
    }
    catch(e){
      console.log("error in login route"+e);
    }
  }

  return (
    <div className="">
      <div className="fixed top-0">
      <Appbar></Appbar>
      </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full  space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-pink-500">Login</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label>Email</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-myntra-500 sm:text-sm" placeholder="John123@gmail.com" />
          </div>
          <div>
            <label>Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-myntra-500 sm:text-sm" placeholder="123456" />
            
          </div>
          

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-myntra-600 focus:ring-myntra-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-myntra-600 hover:text-myntra-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" onClick={handleLogin} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-pink-500 hover:bg-myntra-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myntra-500">
              Sign in
            </button >
            <div>Don't have an account. <Link to="/Signup" className="underline">Signup</Link></div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
