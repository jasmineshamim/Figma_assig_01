import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
    return (
        <footer className="py-6">
            <div className="flex justify-center space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icons_section w-8 h-8 hover:text-blue-600 transition-colors" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icons_section w-8 h-8 hover:text-pink-500 transition-colors" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="icons_section w-8 h-8 hover:text-blue-400 transition-colors" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icons_section w-8 h-8 hover:text-blue-700 transition-colors" />
                </a>
            </div>

            <div className="flex justify-center mt-4">
                <p className="text-sm md:text-base font-semibold">
                    &copy; 2024 All rights reserved
                </p>
            </div>
        </footer>
    );
}
