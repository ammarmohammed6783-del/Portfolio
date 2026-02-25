import Component from "./component/Component"

function Skills() {
    return (
        <div className="bg-gray-100 p-15">
            <div className="text-center py-5">
                <h1 className="text-4xl py-5">Skills & Expertise</h1>
                <p className="text-gray-700">A comprehensive toolkit for building modern web applications</p>
            </div>

            <div className="flex justify-center w-11/12 m-auto">
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}

export default Skills