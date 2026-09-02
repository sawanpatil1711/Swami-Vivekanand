import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/hero/about-section.png";

const features = [
  "Experienced & Dedicated Teachers",
  "Modern Smart Classrooms",
  "Safe & Secure Campus",
  "Sports & Cultural Activities",
];

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutBg}
              alt="School Building"
              className="rounded-3xl shadow-xl"
            />

            {/* <div className="absolute -bottom-8 right-8 rounded-2xl bg-blue-700 px-8 py-6 text-white shadow-2xl">
              <h2 className="text-4xl font-bold">25+</h2>
              <p>Years of Excellence</p>
            </div> */}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-blue-600">
              About Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Inspiring Young Minds,
              <br />
              Creating Bright Futures
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Swami Vivekanand Academy, we believe that education is more than
              textbooks. We nurture curiosity, creativity, leadership,
              and strong values while helping students achieve academic
              excellence.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Our experienced faculty, modern infrastructure, and
              student-centered learning environment prepare every child
              to become a confident and responsible citizen.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-blue-700"
                    size={22}
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800 w-max mt-10">
              Read More
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutSection;