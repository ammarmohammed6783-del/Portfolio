import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="bg-black p-10 text-white">
            <div className="flex m-auto w-fit gap-3 p-3">
                <a href="https://github.com/ammarmohammed6783-del"><FiGithub className="size-5"/></a>
                <a href="https://www.linkedin.com/in/ammar-mohamed-02795a3a8/"><SlSocialLinkedin className="size-5"/></a>
                <a href="mailto:ammar.mohammed.6783@gmail.com"><MdOutlineEmail className="size-5"/></a>
            </div>
            <p className="m-auto w-fit text-gray-300">@{year} Ammar Mohammed. made with love and passion</p>
        </div>
    )
}

export default Footer