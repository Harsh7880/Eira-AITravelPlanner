
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 shadow-lg">
      <div className="flex w-40">
        <img className='w-full' src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center">
       <Link className='cursor-pointer px-6 py-2 text-white font-medium rounded-md bg-[#7B68EE]' to={'/'} >Sign In</Link>
      </div>
    </div>
  );
}

export default Navbar