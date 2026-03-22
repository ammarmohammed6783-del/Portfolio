import exchange from "../../img/exchange.webp"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectType {
    name: string,
    skills: string[],
    about: string,
    imgSrc?: string,
}

interface Props {
    element: ProjectType
}

function Proj({ element }: Props) {
    return (
        <div className="w-full bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">

            {/* Image */}
            <img
                src={element.imgSrc || exchange}
                alt={`${element.name} project`}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{element.name}</h3>
                <p className="text-gray-600 mb-4">
                    {element.about}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-5 flex-wrap">
                    {element.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-gray-700">
                    <a className="flex items-center gap-2 hover:text-black cursor-pointer">
                        <FaGithub /> Code
                    </a>
                    <a className="flex items-center gap-2 hover:text-black cursor-pointer">
                        <FiExternalLink /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj