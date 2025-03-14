export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r leading-right from-black to-[#9B0808] bg-clip-text text-transparent">Hello, I'm Barbara!</h1>
                <p className="text-black text-lg mb-8 max-w-lg mx-auto">
                    I am an analytical and results-driven data analyst with a solid foundation in computer science and a passion for transforming data into actionable insights. With experience spanning multiple industries, including insurance and construction, I specialize in leveraging a variety of data tools and technologies—such as SQL, Power BI, Python, and Oracle—to enhance decision-making, optimize processes, and support data-driven strategies.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="/src/assets/Barbara_Kavanaugh_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                </div>
            </div>
        </section>
    )
}

