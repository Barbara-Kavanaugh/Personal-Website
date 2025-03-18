import { RevealOnScroll } from "../RevealOnScroll";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSumbit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent Successfully!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Unable to Send Message.  Please try again later."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-2">
            <RevealOnScroll>
                <div className="px-4 w-150 bg-[#ecbcbc]/80 backdrop-blur-lg py-6 rounded">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#600b0b] to-[#e42727] bg-clip-text text-transparent text-center">Contact Me</h2>
                    <form className="space-y-6" onSubmit={handleSumbit}>
                        <div className="relative ">
                            <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus-visible:outline-none focus:border-[#600b0b]
                            focus:bg-[#ee8484]/80" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className="relative ">
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus-visible:outline-none focus:border-[#600b0b]
                            focus:bg-[#ee8484]/80" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div className="relative ">
                            <textarea id="message" name="message" required value={formData.message} rows={10} className="w-full bg-[#ffe0e0]/80 backdrop-blur-md border border-white/10 rounded px-4 py-3 text-black transition focus-visible:outline-none focus:border-[#600b0b]
                            focus:bg-[#ee8484]/80" placeholder="Your Message" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                        </div>
                        <button
                            type="submit"
                            className="mt-7 w-full flex items-center justify-center gap-2 bg-[#9B0808] text-white py-2 px-4 rounded font-medium hover:bg-[#fa3535] 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246,59,59,0.4)] transition">
                            Send Message<IoSendSharp />
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}