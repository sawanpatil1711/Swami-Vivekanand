import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Laptop,
  Bus,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    title: "Quality Education",
    description:
      "Experienced teachers with a student-centered learning approach.",
    icon: GraduationCap,
  },
  {
    title: "Modern Library",
    description:
      "A well-stocked library that encourages reading and research.",
    icon: BookOpen,
  },
  {
    title: "Smart Classrooms",
    description:
      "Interactive digital classrooms with the latest teaching technology.",
    icon: Laptop,
  },
  {
    title: "Safe Transport",
    description:
      "GPS-enabled buses with trained drivers and attendants.",
    icon: Bus,
  },
  {
    title: "Sports & Activities",
    description:
      "Indoor and outdoor sports with cultural and creative activities.",
    icon: Trophy,
  },
  {
    title: "Safe Campus",
    description:
      "24×7 CCTV surveillance and a secure learning environment.",
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Providing the Best Learning Environment"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-5 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={34} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;