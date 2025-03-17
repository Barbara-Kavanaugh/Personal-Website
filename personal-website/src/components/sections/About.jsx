import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const databaseSkills = ["Microsoft Azure", "Oracle", "SQL Server Management Studio", "MongoDB", "MariaDB"];
    const developmentSkills = ["Microsoft Power BI", "Visual Studio Code", "Jupyter Notebook", "Google Colab"];
    const programmingLangs = ["SQL", "Python", "JavaScript"];

    const timelineData = [
        {
            date: "12/2024 - 02/2025",
            title: "Data Analyst - AssuredPartners",
            description: "Used Python and Pandas to analyze 1095 data, delivering insights and ensuring compliance in 90 days.",
            icon: <IoIosBriefcase />,
            bgColor: "#9B0808",
        },
        {
            date: "09/2023 - Present",
            title: "Alumnae Association Board Member - Maryvale Preparatory School",
            description: "Collaborate in strategic planning for annual events and reunions to boost alumnae engagement, while soliciting donations to support Maryvale’s college prep curriculum.",
            icon: <MdOutlineVolunteerActivism />,
            bgColor: "#f56161",
        },
        {
            date: "05/2023 - 05/2024",
            title: "Analytics Technician - The Whiting-Turner Contracting Company",
            description: "Built PL/SQL queries in Oracle, used Python for visualization and ML, and created Power BI dashboards for real-time insights.",
            icon: <IoIosBriefcase />,
            bgColor: "#9B0808",
        },
        {
            date: "02/2023 - 05/2023",
            title: "Analytics Technician Intern - The Whiting-Turner Contracting Company",
            description: "Improved SQL queries and data models in SQL Server, aiding migration to a Remote Desktop Environment.",
            icon: <IoIosBriefcase />,
            bgColor: "#9B0808",
        },
        {
            date: "09/2019 - 05/2023",
            title: "B.S. in Computer Science - Loyola University Maryland",
            description: "Graduated with a Bachelor of Science in Computer Science.",
            icon: <FaGraduationCap />,
            bgColor: "#f52626",
        },
        {
            date: "07/2018",
            title: "Teen Academy Intern - Federal Bureau of Investigation, FBI",
            description: "Gained insights into federal law enforcement and tactical procedures through FBI-led training and SWAT firearms demonstrations.",
            icon: <IoIosBriefcase />,
            bgColor: "#9B0808",
        },
        {
            date: "09/2015 - 05/2019",
            title: "High School Diploma - Maryvale Preparatory School",
            description: "Completed high school education with a focus on college preparation.",
            icon: <FaGraduationCap />,
            bgColor: "#f52626",
        },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 bg-[#ecbcbc]/80 backdrop-blur-lg py-6">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#600b0b] to-[#e42727] bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="text-black glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-xl shadow-lg shadow-[0_2px_8px_rgba(246,59,59,0.2)]">
                        <p className="mb-6 font-semibold text-[#600b0b]">
                            Detail-oriented and results-focused professional with a proven talent for converting complex data into clear, actionable insights that drive impactful decisions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Database Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseSkills.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#f74b4b] text-[#4d0202] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition"
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
                                            className="bg-[#f74b4b] text-[#4d0202] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition"
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
                                            className="bg-[#f74b4b] text-[#4d0202] py-1 px-3 rounded-full text-sm hover:bg-[#7a0303] hover:text-[#fa3535] hover:shadow-[0_2px_8px_rgba(246,59,59,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <VerticalTimeline lineColor="#e42727">
                            {timelineData.map((item, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    date={item.date}
                                    dateClassName="text-black"
                                    iconStyle={{ background: item.bgColor, color: "#fff" }}
                                    icon={item.icon}
                                    contentStyle={{
                                        background: "rgba(255, 255, 255, 0.9)",
                                        color: "#000",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        backdropFilter: "blur(10px)",
                                    }}
                                    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.9)" }}
                                >
                                    <h4 className="text-xl font-semibold text-[#600b0b]">{item.title}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};