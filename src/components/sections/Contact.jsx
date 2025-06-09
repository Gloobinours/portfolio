import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';
import { useState } from "react";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../../emailjs.config";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    });
  }
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="w-full max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-center text-transparent">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="relative">
            <input 
              type="text" 
              id="name" 
              name="name" required 
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded 
                          px-4 py-3 text-white transition focus:outline-none 
                          focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
          </div>
          <div className="relative">
            <input 
              type="email" 
              id="email" 
              name="email" required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded 
                          px-4 py-3 text-white transition focus:outline-none 
                          focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
          </div>
          <div className="relative">
            <textarea 
              id="message" 
              name="message" required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded 
                          px-4 py-3 text-white transition focus:outline-none 
                          focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white 
                        py-3 px-4 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </RevealOnScroll>
    </section>
  )
}