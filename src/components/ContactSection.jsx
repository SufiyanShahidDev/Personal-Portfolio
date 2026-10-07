import { useState } from "react";
import { toast } from "react-toastify";
import { saveFeedback } from "../services/feedbackService";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

function ContactSection({ isActive }) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    const name = form.fullName.trim();
    const email = form.email.trim();
    const phoneDigits = form.phone.replace(/\D/g, "");
    const subject = form.subject.trim();
    const message = form.message.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length < 3) {
      toast.error("Full Name must be at least 3 characters.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      toast.error("Phone number must contain 10–15 digits.");
      return false;
    }

    if (!subject) {
      toast.error("Email Subject cannot be empty.");
      return false;
    }

    if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await saveFeedback({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        phoneDigitsOnly: form.phone.replace(/\D/g, ""),
        subject: form.subject.trim(),
        message: form.message.trim()
      });

      toast.success("Message sent successfully. Thank you for contacting me!");
      setForm(initialForm);
    } catch (error) {
      console.error("Feedback submission error:", error);
      toast.error(error.message || "Something went wrong while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`portfolio-section portfolio-contact ${isActive ? "is-contact-active" : ""} bg-[#171f2b] px-[10%] py-8 pb-[18rem] max-[992px]:px-[4%] max-[600px]:pt-4 max-[768px]:pb-[16rem]`}>
      <h2 className="text-center text-[4rem] font-semibold">Contact</h2>
      <div className="flex h-full justify-center">
        <form onSubmit={handleSubmit} className="flex w-[70rem] max-w-full flex-col justify-center">
          <h3 className="mb-4 text-center text-[3rem] text-[#00eeff]">Let's Work Together!</h3>

          <div className="flex flex-wrap gap-8">
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              minLength={3}
              className="min-w-0 flex-[1_1_30rem] rounded-md bg-[#2d3542] p-8 text-[1.6rem] text-white placeholder:text-white focus:ring-2 focus:ring-[#00eeff]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="min-w-0 flex-[1_1_30rem] rounded-md bg-[#2d3542] p-8 text-[1.6rem] text-white placeholder:text-white focus:ring-2 focus:ring-[#00eeff]"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="min-w-0 flex-[1_1_30rem] rounded-md bg-[#2d3542] p-8 text-[1.6rem] text-white placeholder:text-white focus:ring-2 focus:ring-[#00eeff]"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Email Subject"
              required
              className="min-w-0 flex-[1_1_30rem] rounded-md bg-[#2d3542] p-8 text-[1.6rem] text-white placeholder:text-white focus:ring-2 focus:ring-[#00eeff]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              minLength={10}
              className="h-[20rem] min-w-0 flex-[1_1_100%] resize-none rounded-md bg-[#2d3542] p-8 text-[1.6rem] text-white placeholder:text-white focus:ring-2 focus:ring-[#00eeff]"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer rounded-full bg-[#00eeff] px-12 py-5 text-[1.6rem] font-semibold text-[#171f2b] shadow-[0_0_1rem_#00eeff] transition hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
