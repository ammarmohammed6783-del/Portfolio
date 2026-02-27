import Proj from "./component/Proj"

function Projects() {
    return (
        <div className="m-10" id="projects">
            <div className="w-2/3 m-auto text-center">
                <h1 className="text-5xl m-4">Featured Projects</h1>
                <p className="text-gray-600 m-4">here are some of my recent projects that showcase my skills and experience</p>
            </div>
            <div className="flex justify-center gap-5">
                <Proj skills={["Tailwind", "React", "mongodb"]}/>
                <Proj skills={["bootstrab", "angular", "mongodb"]}/>
                <Proj skills={["stylee", "vue.js", "mongodb"]}/>
            </div>
        </div>
    )
}

export default Projects