import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Container from "../common/Container";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone ) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `
📚 New Admission Enquiry

Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Message:
${form.message}
`;

    const phoneNumber = "+919926772522"; // Replace with school's WhatsApp number

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Clear form
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have questions about admissions or academics? Get in touch with us.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                value: "Near Patil Dharamshala, Umar Khali,Khargone, Madhya Pradesh,India - 451441",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 99267 72522",
              },
              {
                icon: Mail,
                title: "Email",
                value: "Rahulvaidhya82@gmail.com",
              },
              {
                icon: Clock,
                title: "Office Hours",
                value: "Mon - Sat : 11:00 AM - 4:00 PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow"
                >
                  <div className="rounded-full bg-blue-100 p-4 text-blue-700">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-lg"
          >
            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Send on WhatsApp
              </button>
            </div>
          </motion.form>
        </div>

        {/* Google Map */}
        <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4734.720682399251!2d75.59093394911261!3d21.72397103333037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd88f8b99225133%3A0x76db173a47ccbffb!2sSwami%20Vivekanand%20academy%20umarkhali!5e1!3m2!1sen!2sin!4v1783954386477!5m2!1sen!2sin" 
            className="h-[400px] w-full"
            loading="lazy"
          />
          {/* <iframe width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;