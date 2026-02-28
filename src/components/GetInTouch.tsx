import React from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const GetInTouch: React.FC = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Extract form values
        const target = e.currentTarget;
        const name = (target.elements.namedItem("name") as HTMLInputElement).value;
        const email = (target.elements.namedItem("email") as HTMLInputElement).value;
        const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

        // Send email using EmailJS
        emailjs
            .send(
                "service_xj6g4qr",   // replace with your Service ID
                "template_kfi2hau",  // replace with your Template ID
                { name, email, message },
                "owBTIpE3-VhCnl6LN"    // replace with your Public Key
            )
            .then(() => {
                alert("Message sent!");
                target.reset(); // Clear the form after sending
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                alert("Failed to send message, please try again.");
            });
    };

    return (
        <div className="bg-gray-50 py-12.5" id="getTouch">
            <div className="m-auto w-fit text-center">
                <h1 className="text-6xl py-5">Get In Touch</h1>
                <p className="text-gray-700">
                    Have a project in mind or just want to chat? I'd love to hear from you!
                </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-center my-6">
                {/* Contact Information */}
                <div className="contact_info w-1/3 min-w-75">
                    <h3 className="text-2xl py-3">Contact Information</h3>
                    <p className="text-gray-600 py-3">
                        Feel free to reach out through any of these channels. I typically respond within 24 hours.
                    </p>

                    <div className="flex flex-col">
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
                                <p>Cairo</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={sendEmail}
                    className="form w-1/3 min-w-75 p-5 m-3 shadow rounded-2xl"
                >
                    <div className="flex flex-col py-2">
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className="border p-2 border-gray-400 rounded"
                        />
                    </div>

                    <div className="flex flex-col py-2">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                            className="border p-2 border-gray-400 rounded"
                        />
                    </div>

                    <div className="flex flex-col py-2">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message Here..."
                            required
                            className="h-32 border p-2 border-gray-400 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex justify-center items-center gap-3 bg-blue-600 text-white rounded py-2 my-3 px-5 w-full hover:bg-blue-700 transition"
                    >
                        <FiSend /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;