import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgbzkdg"); // Replace with your actual Formspree form ID
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto text-center text-lg text-gray-700 dark:text-white animate-fadeIn">
          <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors">
      <h3 className="text-4xl font-extrabold text-pink-600 dark:text-pink-400 text-center mb-8 animate-fadeInDown">
        Get In Touch
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 animate-fadeInUp"
        style={{ width: "90%", maxWidth: "900px" }}
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Mobile Number */}
        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          onChange={handleChange}
          required
          pattern="^\+?[0-9\s\-]{7,15}$"
          title="Please enter a valid phone number"
        />
        <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />

        {/* Message */}
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          onChange={handleChange}
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-pink-600 text-white font-semibold py-4 rounded hover:bg-pink-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-pink-500/50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
