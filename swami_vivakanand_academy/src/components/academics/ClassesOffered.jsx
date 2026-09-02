import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Container from "../common/Container";

const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Class I - V",
  "Class VI - IX",
];

const ClassesOffered = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-blue-600">
            Academics
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Classes Offered
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide quality education from early childhood to senior
            secondary, ensuring holistic growth at every stage.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-2xl"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 text-5xl font-bold text-blue-100 transition group-hover:text-blue-200">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="mb-6 inline-flex rounded-full bg-blue-100 p-4 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <GraduationCap size={30} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">
                {item}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600">
                A well-structured curriculum designed to encourage academic
                excellence, creativity, and overall personality development.
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-16 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClassesOffered;