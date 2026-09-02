import { motion } from "framer-motion";
import Container from "../common/Container";
import aboutbg from "../../assets/hero/aboutus-page.png"

const AboutSchool = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={aboutbg}
            alt="School"
            className="rounded-2xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold uppercase tracking-[3px] text-blue-600">
              About Us
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Building Bright Futures
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Swami Vivekanand Academy provides quality education through innovation,
              discipline, and holistic development. We strive to nurture
              confident, responsible, and compassionate individuals prepared
              for the future.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSchool;