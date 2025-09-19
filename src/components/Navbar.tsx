"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const menuItems = [
        { label: "Home" },
        { label: "About" },
        { label: "Service" },
        { label: "Resume" },
        { label: "Project" },
        { label: "Contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
    <nav className="relative w-full max-w-4xl h-[60px] bg-white text-black px-6 rounded-full border-2 border-black mx-auto flex items-center justify-between z-50">
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2">
                {menuItems.slice(0, 3).map((item) => (
                    <button
                        key={item.label}
                        className={`px-4 py-2 flex items-center justify-center rounded-full text-sm font-medium transition duration-300 ${selected === item.label ? 'bg-black text-white font-bold' : 'bg-transparent hover:bg-gray-100'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <text x="4" y="18" fontSize="12" fontWeight="bold" fill="white">AB</text>
                    </svg>
                </div>
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end gap-2">
                {menuItems.slice(3).map((item) => (
                    <button
                        key={item.label}
                        className={`px-4 py-2 flex items-center justify-center rounded-full text-sm font-medium transition duration-300 ${selected === item.label ? 'bg-black text-white font-bold' : 'bg-transparent hover:bg-gray-100'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={16} color="white" /> : <Menu size={16} color="white" />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-black lg:hidden z-40">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full h-10 flex items-center justify-center rounded-full text-sm font-medium transition duration-300 ${selected === item.label ? 'bg-black text-white font-bold' : 'bg-transparent hover:bg-gray-100'}`}
                                onClick={() => {
                                    setSelected(item.label);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
