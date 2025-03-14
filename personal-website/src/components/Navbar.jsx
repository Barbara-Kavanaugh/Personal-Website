import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ( {menuOpen, setMenuOpen} ) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8) backdrop-blur-lg border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        ༺ ♱ <span className="text-[#FC3B3B]">Barbara</span> ♱ ༻
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        <GiHamburgerMenu />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-[#FC3B3B] transition-colors">Home</a>
                        <a href="#about" className="text-white hover:text-[#FC3B3B] transition-colors">About Me</a>
                        <a href="#projects" className="text-white hover:text-[#FC3B3B] transition-colors">Projects</a>
                        <a href="#contact" className="text-white hover:text-[#FC3B3B] transition-colors">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};