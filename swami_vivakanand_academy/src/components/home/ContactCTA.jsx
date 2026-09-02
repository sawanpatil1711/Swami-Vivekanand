import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Have questions about admissions, academics, or facilities?
            Our team is here to help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="tel:+919926772522"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              <PhoneCall size={20} />
              Call Us
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              <Mail size={20} />
              Contact Page
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactCTA;