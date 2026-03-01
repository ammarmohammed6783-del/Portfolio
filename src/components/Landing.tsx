import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import myImage from "../img/OIP.webp";

function Landing() {
    return (
        <div className="w-screen h-11/12 bg-gray-50 flex p-5 justify-center items-center gap-6">
            <div className="text">
                <h1 className="text-6xl py-4">Hi, I'm <span className="text-blue-600">Ammar</span></h1>
                <h2 className="text-4xl py-4">Front-end Dev - React.js</h2>
                <p className="text-gray-700">I create beautiful, functional websites and applications that <br /> solve real-world problems. Passionate about clean code, <br /> intuitive design, and delivering exceptional user experiences.</p>
                <div className="buttons flex my-6 gap-5">
                    <a href="#getTouch">
                        <button className="flex items-center gap-2 px-4 py-3 text-white bg-blue-600 rounded-xl border-2 border-blue-600 hover:bg-transparent hover:text-black">
                            Get In Touch
                            <FaArrowRight className="size-5" />
                        </button>
                    </a>

                    <a href="#projects">
                        <button className="flex items-center px-4 py-3 text-black bg-transparent border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white">
                            View Work
                        </button>
                    </a>
                </div>
                <div className="icons flex my-3">
                    <a href="https://github.com/ammarmohammed6783-del"><FaLinkedinIn className="size-10 p-2" /></a>
                    <a href="mailto:ammar.mohammed.6783@gmail.com"><CiMail className="size-10 p-2" /></a>
                    <a href="https://www.linkedin.com/in/ammar-mohamed-02795a3a8/"><FaGithub className="size-10 p-2" /></a>
                </div>
            </div>
            <div className="hidden relative w-125 h-75 lg:block">
                <img
                    src={myImage}
                    alt=""
                    className="relative z-10 rounded-2xl w-full h-full"
                />

                <div className="absolute inset-0 w-full h-full bg-linear-to-bl from-blue-500 to-purple-500 rounded-2xl rotate-3"></div>
            </div>
        </div>
    )
}

export default Landing