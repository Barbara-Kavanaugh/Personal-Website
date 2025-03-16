import { FaGraduationCap } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { MdOutlineVolunteerActivism } from "react-icons/md";

export const About = () => {
    const databaseSkills = ["Microsoft Azure", "Oracle", "SQL Server Management Studio", "MongoDB", "MariaDB"];
    const developmentSkills = ["Microsoft Power BI", "Visual Studio Code", "Jupyter Notebook", "Google Colab"];
    const programmingLangs = ["SQL", "Python", "JavaScript"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-black to-[#e51818] bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="text-black glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-xl shadow-lg shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)]">
                    <p className="mb-6 text-black">
                        Detail-oriented and results-focused professional with a proven talent for 
                        converting complex data into clear, actionable insights that drive impactful decisions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Database Management</h3>
                            <div className="flex flex-wrap gap-2">
                                {databaseSkills.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Development Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {developmentSkills.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingLangs.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#f74b4b] text-[#7a0303] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-black backdrop-blur-xl shadow-lg shadow-[0_2px_8px_rgba(246, 59, 59, 0.2)]">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education<FaGraduationCap /></h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Loyola University Maryland</strong> - B.S. in Computer Science (09/2019 - 05/2023)
                        </li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Maryvale Preparatory School</strong> - High School Diploma (09/2015 - 05/2019)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Experience<IoIosBriefcase /></h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold">Data Analyst - AssuredPartners (12/2024 - 02/2025)</h4>
                            <p>
                                Used Python and Pandas to analyze 1095 data,
                                delivering insights and ensuring compliance in 90 days.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Analytics Technician - The Whiting-Turner Contracting Company (05/2023 - 05/2024)</h4>
                            <p>
                                Built PL/SQL queries in Oracle, used Python for visualization and ML, 
                                and created Power BI dashboards for real-time insights.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Analytics Technician Intern - The Whiting-Turner Contracting Company (02/2023 - 05/2023)</h4>
                            <p> 
                                Improved SQL queries and data models in SQL Server, 
                                aiding migration to a Remote Desktop Environment.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Teen Academy Intern - Federal Bureau of Investigation, FBI (07/2018)</h4>
                            <p> 
                                Gained insights into federal law enforcement and tactical procedures by 
                                participating in FBI-led training and observing SWAT firearms demonstrations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Volunteer Experience<MdOutlineVolunteerActivism /></h3>
                    <div>
                            <h4 className="font-semibold">Alumnae Association Board Member - Maryvale Preparatory School (09/2023 - Present)</h4>
                            <p>
                                Collaborate in strategic planning for annual events and reunions to boost alumnae engagement, 
                                while soliciting donations to support Maryvale’s college prep curriculum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};