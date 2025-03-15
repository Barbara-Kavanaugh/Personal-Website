export const About = () => {
    const databaseSkills = ["Microsoft Azure", "Oracle", "SQL Server Management Studio", "MongoDB", "MariaDB"];
    const developmentSkills = ["Microsoft Power BI", "Visual Studio Code", "Jupyter Notebook", "Google Colab"];
    const programmingLangs = ["SQL", "Python", "JavaScript"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r leading-right from-black to-[#e51818] bg-clip-text text-transparent text-center">About Me</h2>

                <div className="text-black glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="mb-6">
                        Analytical and results-driven professional with a strong ability to
                        transform data into actionable insights.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Database Management</h3>
                            <div className="flex flex-wrap gap-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}