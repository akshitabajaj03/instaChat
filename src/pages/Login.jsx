import { UserAuth } from "../context/AuthContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const { currentUser, signinWithGoogle } = UserAuth();
  
 const handleLogin = async () => {
   try{
     await signinWithGoogle();
   } catch(error) {
    console.log(error)
   }
 }


 useEffect (() => {
  if(currentUser) 
  {
    navigate("/chat");
  }
 },[currentUser]);
 


  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="font-serif max-w-lg font-bold leading-normal text-5xl text-green-500">Hello there👋🏻</h1>
      <p className="py-6">Join the conversation, meet new people, and make connections in one shared room.</p>
      <button  onClick={handleLogin} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-110 transform transition-all duration-300 ease-in-out rounded-md px-6 py-3 text-white shadow-lg">Login With Google</button>
    </div>
  </div>
</div>
  )
}

export default Login