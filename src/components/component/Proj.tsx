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
        <div className="w-full bg-white flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

            {/* Image */}
            <div className="relative overflow-hidden h-60 bg-white">
                <img
                    src={element.imgSrc || exchange}
                    alt={`${element.name} project`}
                    className="w-full h-full object-cover object-center scale-[1.08] transition-transform duration-500 group-hover:scale-[1.15]"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{element.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {element.about}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-6 flex-wrap">
                    {element.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-xs font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-gray-100 text-sm font-semibold">
                    <a className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                        <FaGithub className="text-base" />
                        Code
                    </a>
                    <a className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                        <FiExternalLink className="text-base" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj