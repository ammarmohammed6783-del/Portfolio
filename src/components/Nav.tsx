// import { FaLinkedinIn, FaUser, FaHome, FaBriefcase } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";

function Nav() {
    return (
        <div className="bg-white p-4 h-1/12 flex justify-between items-center shadow">
            <p className="text-2xl text-blue-600">Portfolio</p>
            <div className="links">
                <a href="" className="text-gray-700 p-4">About</a>
                <a href="" className="text-gray-700 p-4">Projects</a>
                <a href="" className="text-gray-700 p-4">Skills</a>
                <a href="" className="text-gray-700 p-4">Contact</a>
            </div>
        </div>
    )
}

export default Nav