import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const AdmissionCTA = () => {
  return (
    <section className="bg-blue-700 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white p-10 shadow-xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <span className="font-semibold uppercase tracking-[3px] text-blue-600">
                Admissions Open
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Begin Your Child's Learning Journey Today
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600">
                Admissions are now open for the new academic session.
                Join a school committed to excellence in education,
                innovation, and holistic development.
              </p>
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};


export default AdmissionCTA;