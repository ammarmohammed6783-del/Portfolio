import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
    const [open, setOpen] = useState(false);

    // Close mobile menu when screen becomes desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <div className="bg-white h-16 flex justify-between items-center shadow px-4 relative">
            {/* Logo */}
            <p className="text-2xl text-blue-600 font-semibold">Portfolio</p>

            {/* Desktop Menu */}
            <div className="hidden sm:flex h-full">
                <a href="#about" onClick={closeMenu} className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    About
                </a>
                <a href="#projects" onClick={closeMenu} className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Projects
                </a>
                <a href="#skills" onClick={closeMenu} className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Skills
                </a>
                <a href="#getTouch" onClick={closeMenu} className="flex items-center px-4 border-b-2 border-transparent hover:border-blue-600 transition">
                    Contact
                </a>
            </div>

            {/* Burger Icon */}
            <RxHamburgerMenu
                onClick={() => setOpen(!open)}
                className="block sm:hidden w-8 h-8 cursor-pointer"
            />

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col sm:hidden transition-all duration-200 ${open ? "block" : "hidden"
                    }`}
            >
                <a href="#about" onClick={closeMenu} className="px-4 py-3 border-b hover:bg-gray-100">
                    About
                </a>
                <a href="#projects" onClick={closeMenu} className="px-4 py-3 border-b hover:bg-gray-100">
                    Projects
                </a>
                <a href="#skills" onClick={closeMenu} className="px-4 py-3 border-b hover:bg-gray-100">
                    Skills
                </a>
                <a href="#getTouch" onClick={closeMenu} className="px-4 py-3 hover:bg-gray-100">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Nav;