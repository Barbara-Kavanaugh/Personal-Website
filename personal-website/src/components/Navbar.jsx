import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ( {menuOpen, setMenuOpen} ) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(241, 231, 231, 0.8) bg-transparent backdrop-blur-5xl border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-xl font-bold text-[#000000] font-['Gelasio']">
                        ༺ ♱ <span className="text-[#000000]">Barbara</span> ♱ ༻
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#000000]" onClick={() => setMenuOpen((prev) => !prev)}>
                        <GiHamburgerMenu />
                    </div>

                    <div className="hidden md:flex items-center space-x-8 font-['Gelasio']">
                        <a href="#home" className="font-['Gelasio'] font-bold text-[#000000] hover:text-[#FBAAAA] transition-colors">Home</a>
                        <a href="#about" className="font-['Gelasio'] font-bold text-[#000000] hover:text-[#FBAAAA] transition-colors">About Me</a>
                        <a href="#projects" className="font-['Gelasio'] font-bold text-[#000000] hover:text-[#FBAAAA] transition-colors">Projects</a>
                        <a href="#contact" className="font-['Gelasio'] font-bold text-[#000000] hover:text-[#FBAAAA] transition-colors">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};