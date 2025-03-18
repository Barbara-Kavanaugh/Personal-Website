import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                alert("Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Unable to Send Message. Please try again later."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-20">
            <RevealOnScroll>
                <div className="max-w-xl mx-auto px-4 sm:px-6 bg-[#ecbcbc]/80 backdrop-blur-md py-6 rounded">
                    <h2 className="text-5xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#600b0b] to-[#e42727] bg-clip-text text-transparent text-center">
                        Contact Me
                    </h2>
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-[#600b0b] focus:bg-[#ee8484]/80 text-sm sm:text-base"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-[#600b0b] focus:bg-[#ee8484]/80 text-sm sm:text-base"
                            placeholder="Email"
                        />
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={4} // Reduced from 10 for mobile
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-[#600b0b] focus:bg-[#ee8484]/80 text-sm sm:text-base"
                            placeholder="Your Message"
                        />
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium hover:bg-[#fa3535] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246,59,59,0.4)] transition text-sm sm:text-base"
                        >
                            Send Message <IoSendSharp />
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};