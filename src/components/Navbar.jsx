import { UserAuth } from "../context/AuthContext"

const Navbar = () => {

  const {currentUser, logout} = UserAuth();
   
  const handleLogout = async () => {
    try{
      await logout();
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-primary-content">
    <div className="containerWrap flex justify-between">
    <a className="text-gray-300 hover:text-white uppercase tracking-wide font-medium transition-colors duration-300 ease-in-out">instantChat</a>
    {currentUser ? <button onClick={handleLogout}>Logout</button>: ""}
  </div>
  </div>
  )
}

export default Navbar