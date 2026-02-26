import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

function GetInTouch() {
    return (
        <div className="bg-gray-50">
            <div className="m-auto w-fit text-center">
                <h1 className="text-6xl py-5">Get In Touch</h1>
                <p className="text-gray-700">have a project in mind or just wnat to chat? i'd love to ehar from you!</p>
            </div>

            <div className="flex gap-5 justify-center my-6">
                <div className="contact_info w-1/3">
                    <h3 className="text-2xl py-3">Contact Information</h3>
                    <p className="text-gray-600 py-3">feel free to reach out through any of these channels. i typically repond withing 24 hours</p>
                    <div>
                        <div className="card flex gap-3 items-center bg-white p-3 rounded my-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-600">
                                <MdOutlineEmail className="text-xl" />
                            </div>
                            <div className="info">
                                <p>Email</p>
                                <p>ammar.mohammed.6783@gmail.com</p>
                            </div>
                        </div>
                        <div className="card flex gap-3 items-center bg-white p-3 rounded my-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-600">
                                <FiPhone className="text-xl" />
                            </div>
                            <div className="info">
                                <p>Phone</p>
                                <p>+22 01159192176</p>
                            </div>
                        </div>
                        <div className="card flex gap-3 items-center bg-white p-3 rounded my-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-600">
                                <CiLocationOn className="text-xl" />
                            </div>
                            <div className="info">
                                <p>Location</p>
                                <p>cairo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form w-1/3 p-5 m-3 shadow rounded-2xl">
                    <div className="entry flex flex-col py-2 ">
                        <label className="py-2" htmlFor="name">Name</label>
                        <input className="border p-2 border-gray-400 rounded" type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="entry flex flex-col py-2 ">
                        <label className="py-2" htmlFor="email">Email</label>
                        <input className="border p-2 border-gray-400 rounded" type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="entry flex flex-col py-2">
                        <label className="py-2" htmlFor="message">Message</label>
                        <input className="h-32 border p-2 border-gray-400 rounded" type="text" id="message" placeholder="Your Message Here..." />
                    </div>
                    <button className="flex justify-center items-center gap-3 bg-blue-600 text-white rounded py-2 my-3 px-5 w-full"><FiSend /> Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch