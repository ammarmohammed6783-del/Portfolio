function Component() {
    return (
        <div className="w-full">
            <div className="skill p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-2xl text-center mb-6">Front-End</h3>

                {/* Skill */}
                <div className="flex flex-col gap-2 mb-5">
                    <div className="flex justify-between">
                        <p className="text-gray-600">React</p>
                        <p>95%</p>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-2xl">
                        <div className="h-2 w-11/12 bg-blue-600 rounded-2xl"></div>
                    </div>
                </div>

                {/* Skill */}
                <div className="flex flex-col gap-2 mb-5">
                    <div className="flex justify-between">
                        <p className="text-gray-600">TypeScript</p>
                        <p>90%</p>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-2xl">
                        <div className="h-2 w-10/12 bg-blue-600 rounded-2xl"></div>
                    </div>
                </div>

                {/* Skill */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-gray-600">Tailwind</p>
                        <p>92%</p>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-2xl">
                        <div className="h-2 w-11/12 bg-blue-600 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component