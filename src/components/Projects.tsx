import Proj from "./component/Proj"

function Projects() {
    return (
        <div className="m-10" id="projects">
            <div className="max-w-3xl m-auto text-center">
                <h1 className="text-3xl md:text-5xl m-4">Featured Projects</h1>
                <p className="text-gray-600 m-4">
                    Here are some of my recent projects that showcase my skills and experience
                </p>
            </div>

            <div className="grid gap-6 w-11/12 m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Proj skills={["Tailwind", "React", "MongoDB"]} />
                <Proj skills={["Bootstrap", "Angular", "MongoDB"]} />
                <Proj skills={["CSS", "Vue.js", "MongoDB"]} />
            </div>
        </div>
    )
}

export default Projects