import { FaCode } from "react-icons/fa";

function About() {
    return (
        <div id="about" className="flex flex-col justify-center items-center text-center my-15 px-4">
            <div className="text max-w-3xl">
                <h1 className="text-4xl md:text-6xl">About Me</h1>
                <p className="text-gray-600">
                    I'm a passionate full-stack developer with 5+ years of experience building web
                    applications. I specialize in React, TypeScript, and Node.js, and I love turning
                    complex problems into elegant solutions.
                </p>
            </div>

            <div className="cards flex justify-center my-10 flex-wrap gap-6">
                <div className="card p-6 bg-gray-100 w-full sm:w-1/2 lg:w-1/4 rounded-2xl flex flex-col items-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-14 h-14" />
                    <h3 className="text-xl font-semibold py-4">Clean Code</h3>
                    <p className="text-gray-700">
                        Writing maintainable, scalable, and well-documented code is my priority.
                    </p>
                </div>

                <div className="card p-6 bg-gray-100 w-full sm:w-1/2 lg:w-1/4 rounded-2xl flex flex-col items-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-14 h-14" />
                    <h3 className="text-xl font-semibold py-4">Performance</h3>
                    <p className="text-gray-700">
                        Optimized applications that load fast and scale efficiently.
                    </p>
                </div>

                <div className="card p-6 bg-gray-100 w-full sm:w-1/2 lg:w-1/4 rounded-2xl flex flex-col items-center text-center">
                    <FaCode className="p-3 bg-blue-600 text-white rounded-full w-14 h-14" />
                    <h3 className="text-xl font-semibold py-4">Best Practices</h3>
                    <p className="text-gray-700">
                        Following modern development standards and clean architecture.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;