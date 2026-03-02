import Component from "./component/Component"

function Skills() {
    return (
        <div id="skills" className="bg-gray-100 p-8 md:p-15">
            <div className="text-center py-5">
                <h1 className="text-3xl md:text-4xl py-5">Skills & Expertise</h1>
                <p className="text-gray-700">
                    A comprehensive toolkit for building modern web applications
                </p>
            </div>

            <div className="grid gap-6 w-11/12 m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}

export default Skills