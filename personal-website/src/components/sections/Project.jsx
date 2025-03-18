import { IoIosArrowRoundForward } from "react-icons/io";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 py-6 bg-[#ecbcbc]/80 backdrop-blur-lg rounded border border-white/15 shadow-[0_0_15px_rgba(22,7,7,0.4)] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246,59,59,0.4)] transition-all">
                    <h2 className="mb-8 text-5xl font-bold bg-gradient-to-r from-[#600b0b] to-[#e42727] bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-[#600b0b]">Maryvale Alumnae Network</h3>
                            <p className="mb-4 text-gray-700">
                                Built a web app for Maryvale alumnae to create profiles, connect, and engage with job and message boards.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="https://github.com/Barbara-Kavanaugh/SeniorProject"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium hover:bg-[#fa3535] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246,59,59,0.4)] transition"
                            >
                                View Project <IoIosArrowRoundForward />
                            </a>
                        </div>
                        <div className="p-6 rounded-xl bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-[#600b0b]">Ethereum Casino</h3>
                            <p className="mb-4 text-gray-700">
                                Developed a game with Testnet Ethereum for secure blockchain casino gaming.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Solidity", "Hardhat", "Etherscan"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="https://github.com/Barbara-Kavanaugh/Crypto-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium hover:bg-[#fa3535] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246,59,59,0.4)] transition"
                            >
                                View Project <IoIosArrowRoundForward />
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};