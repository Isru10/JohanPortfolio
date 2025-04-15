import logo from "../assets/Ylogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="kr" />

        </div>
        <div className="m-8 flex items-center text-2xl justify-center gap-4 ">
          <a href="https://www.linkedin.com/in/israel-solomon-2b756b2b8/" target="_blank"><FaLinkedin/></a>
          <a href="https://github.com/Isru10" target="_blank"><FaGithub/></a>
            

            {/* <FaSquareXTwitter/> */}
            <FaInstagram/>
        </div>
        </nav>
  )
}

export default Navbar