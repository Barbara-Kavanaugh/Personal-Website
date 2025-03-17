import { IoIosArrowRoundForward } from "react-icons/io";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Maryvale Alumnae Network</h3>
                            <p className="mb-4">
                                Built a web applicaion for Maryvale Preparatory School alumnae to create 
                                profiles, connect with classmates, and 
                                engage with job and message boards for networking.
                            </p>
                            <div>
                                {["MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)] transition"
                                    >
                                        {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barbara-Kavanaugh/SeniorProject" target="_blank" rel="noopener noreferrer"
                                className="mt-7 flex items-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 59, 59, 0.4)] hover:bg-[#fa3535]">
                                    View Project<IoIosArrowRoundForward />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Ethereum Casino</h3>
                            <p className="mb-4">
                                Built a web applicaion for Maryvale Preparatory School alumnae to create 
                                profiles, connect with classmates, and 
                                engage with job and message boards for networking.
                            </p>
                            <div>
                                {["React", "Solidity", "Hardhat", "Etherscan"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)] transition"
                                    >
                                        {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barbara-Kavanaugh/Crypto-Project" target="_blank" rel="noopener noreferrer"
                                className="mt-7 flex items-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 59, 59, 0.4)] hover:bg-[#fa3535]">
                                    View Project<IoIosArrowRoundForward />
                                </a>
                            </div>
                        </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}