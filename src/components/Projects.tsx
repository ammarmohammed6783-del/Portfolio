import Proj from "./component/Proj"

function Projects() {

    let proj_data = [
        {
            name: "Swapify",
            skills: ["Tailwind", "React.js", "MongoDB", "Express"],
            about: "A space where value isn’t measured by money. Swap what you have for what you need and support each other through fair, simple exchanges.",
        },
        {
            name: "ex",
            skills: ["Tailwind", "React", "MongoDB"],
            about: "My idea is to exchange anything you want with anything you can do or have."
        },
        {
            name: "ex",
            skills: ["Tailwind", "React", "MongoDB"],
            about: "My idea is to exchange anything you want with anything you can do or have."
        }
    ]

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
                <Proj skills={["Tailwind", "React.js", "MongoDB", "Express"]} />
                <Proj skills={["CSS", "Vue.js", "MongoDB"]} />
            </div>
        </div>
    )
}

export default Projects