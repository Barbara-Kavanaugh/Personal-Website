import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 py-3 px-4 rounded bg-[#ecbcbc]/80 backdrop-blur-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 59, 59, 0.4)] transition-all border border-white/15 shadow-[0_0_15px_rgba(22, 7, 7, 0.4)]">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#600b0b] to-[#cd1d1d] bg-clip-text text-transparent text-center">Hello, I'm Barbara!</h1>
                    <p className="text-gray-900 font-semibold text-lg mb-8 max-w-lg mx-auto">
                        I am a data analyst with a computer science background, passionate about turning data into actionable insights. Experienced in insurance and construction, I use tools like SQL, Power BI, Python, and Oracle to improve decision-making and processes. I am also active in the Maryvale Preparatory School Alumnae Association, supporting curriculum and community initiatives.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            className="bg-[#9B0808] text-white py-3 px-6 rounded font-medium transition relative 
                            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 59, 59, 0.4)] hover:bg-[#fa3535]" 
                            href="/src/assets/Barbara_Kavanaugh_Resume_2025.pdf" 
                            target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                        <a 
                            className="bg-[#9B0808] text-white py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(246, 59, 59, 0.2)] hover:bg-[#fa3535]" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

