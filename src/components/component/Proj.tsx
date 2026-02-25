import exchange from "../../img/exchange.webp"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface probs {
    skills: string[],
}

function Proj({skills} : probs) {
    return (
        <div className="w-3/11 shadow rounded-2xl">
            <img src={exchange} alt="exchange" />
            <div className="m-4">
                <h3>exchange web</h3>
                <p>my idea is to exchange anything you want with anything you can do or have</p>
                <div className="flex gap-1 my-5 flex-wrap justify-center">
                    {
                        skills.map((skill, index) => (
                            <div key={index} className="tag px-4 py-1 bg-blue-50 rounded-2xl w-fit text-blue-500">{skill}</div>
                        ))
                    }
                </div>
                <div className="flex gap-4">
                    <p className="flex items-center gap-2"><FaGithub /> Code</p>
                    <p className="flex items-center gap-2"><FiExternalLink/> Live Demo</p>
                </div>
            </div>
        </div>
    )
}

export default Proj