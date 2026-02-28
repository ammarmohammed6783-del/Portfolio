// import { FaLinkedinIn, FaUser, FaHome, FaBriefcase } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";

function Nav() {
    return (
        <div className="bg-white h-16 flex justify-between items-center shadow px-4">
            <p className="text-2xl text-blue-600">Portfolio</p>

            <div className="flex h-full">
                <a href="#about" className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    About
                </a>
                <a href="#projects" className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Projects
                </a>
                <a href="#skills" className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Skills
                </a>
                <a href="#getTouch" className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Nav