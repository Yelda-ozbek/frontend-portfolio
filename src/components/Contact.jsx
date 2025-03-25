import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import content from "../data/content.json";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }
  
    toast.success("Mesaj başarıyla gönderildi! 🎉");
  
 
    axios.post("https://reqres.in/api/workintech", formData)
      .then(() => {
        toast.success("Sunucuya gönderildi!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Gönderim sırasında bir hata oluştu.");
      });
  };
  
  

  return (
    <section className="bg-lime-100 dark:bg-darkBg py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-violet-700 dark:text-limeText">
        {t.title}
      </h2>
      <p className="text-lg mb-8 text-gray-700 dark:text-white">{t.desc}</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder={lang === "tr" ? "Adınız" : "Your Name"}
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={lang === "tr" ? "E-posta" : "Email"}
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
        <textarea
          name="message"
          placeholder={lang === "tr" ? "Mesajınız" : "Your Message"}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 h-32"
          required
        />
        <button
          type="submit"
          className="bg-violet-700 text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          {lang === "tr" ? "Gönder" : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
