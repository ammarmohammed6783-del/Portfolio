import React from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const GetInTouch: React.FC = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const name = (target.elements.namedItem("name") as HTMLInputElement).value;
        const email = (target.elements.namedItem("email") as HTMLInputElement).value;
        const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

        emailjs
            .send(
                "service_xj6g4qr",   
                "template_kfi2hau",  
                { name, email, message },
                "owBTIpE3-VhCnl6LN"  
            )
            .then(() => {
                alert("Message sent!");
                target.reset();
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                alert("Failed to send message, please try again.");
            });
    };

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8" id="getTouch">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-4xl md:text-5xl font-bold py-4">Get In Touch</h2>
                <p className="text-gray-600">
                    Have a project in mind or just want to chat? I'd love to hear from you!
                </p>
            </div>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
                
                {/* Contact Information (Left Side) */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
                        <p className="text-gray-600 mb-6">
                            Feel free to reach out through any of these channels. I typically respond within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Email Card */}
                        <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                                <MdOutlineEmail className="text-2xl" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Email</p>
                                <p className="text-gray-800 wrap-break-word">ammar.mohammed.6783@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                                <FiPhone className="text-2xl" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Phone</p>
                                <p className="text-gray-800">+22 01159192176</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                                <CiLocationOn className="text-2xl" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Location</p>
                                <p className="text-gray-800">Cairo, Egypt</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Right Side) */}
                <form
                    onSubmit={sendEmail}
                    className="w-full lg:w-2/3 bg-white p-6 md:p-8 shadow-lg rounded-2xl border border-gray-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="border p-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="border p-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="mb-2 font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message Here..."
                            required
                            className="h-40 border p-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex justify-center items-center gap-3 bg-blue-600 text-white rounded-lg py-3 px-6 w-full md:w-max font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                    >
                        <FiSend /> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;