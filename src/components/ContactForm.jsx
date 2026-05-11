import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactForm.css";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const toastCopy = {
  success: {
    title: "Message sent",
    body: "Thanks for reaching out. I will get back to you soon.",
  },
  error: {
    title: "Something went wrong",
    body: "Please try again in a moment or email me directly.",
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setToast(null);

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setToast({ type: "error", ...toastCopy.error });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey,
        },
      );

      setFormData(initialFormState);
      setToast({ type: "success", ...toastCopy.success });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setToast({ type: "error", ...toastCopy.error });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      id="react-contact-form"
      className="contact-form-shell"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`contact-toast contact-toast--${toast.type}`}
            role="status"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contact-toast__dot" />
            <div>
              <strong>{toast.title}</strong>
              <p>{toast.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__grid">
          <label className="contact-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Sandheep G S"
              autoComplete="name"
              required
            />
          </label>

          <label className="contact-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <label className="contact-field">
          <span>Subject</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project collaboration"
            required
          />
        </label>

        <label className="contact-field">
          <span>Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your idea, timeline, or role."
            rows="6"
            required
          />
        </label>

        <motion.button
          className="contact-submit"
          type="submit"
          disabled={isSending}
          whileHover={isSending ? undefined : { scale: 1.02 }}
          whileTap={isSending ? undefined : { scale: 0.98 }}
        >
          {isSending && <span className="contact-submit__spinner" aria-hidden="true" />}
          {isSending ? "Sending..." : "Submit Inquiry"}
        </motion.button>
      </form>
    </motion.div>
  );
}
