import { FaCode } from "react-icons/fa";

function About() {
    return (
        <div className="flex flex-col justify-center items-center text-center my-15">
            <div className="text ">
                <h1 className="text-6xl">About Me</h1>
                <p className="text-gray-600">I'm a passionate full-stack developer with 5+ years of experience building web</p>
                <p className="text-gray-600">applications. I specialize in React, TypeScript, and Node.js, and I love turning</p>
                <p className="text-gray-600">complex problems into elegant solutions.</p>
            </div>

            <div className="cards flex justify-center my-5">
                <div className="card p-5 m-5 bg-gray-100 w-1/5 rounded-2xl flex flex-col items-center justify-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-15 h-15"/>
                    <h3 className="text-2xl p-4">Clean Code</h3>
                    <p className="text-gray-700">Writing maintainable, scalable, and well-documented code is my priority.</p>
                </div>
                <div className="card p-5 m-5 bg-gray-100 w-1/5 rounded-2xl flex flex-col items-center justify-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-15 h-15"/>
                    <h3 className="text-2xl p-4">Clean Code</h3>
                    <p className="text-gray-700">Writing maintainable, scalable, and well-documented code is my priority.</p>
                </div>
                <div className="card p-5 m-5 bg-gray-100 w-1/5 rounded-2xl flex flex-col items-center justify-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-15 h-15"/>
                    <h3 className="text-2xl p-4">Clean Code</h3>
                    <p className="text-gray-700">Writing maintainable, scalable, and well-documented code is my priority.</p>
                </div>
            </div>
        </div>
    )
}

export default About