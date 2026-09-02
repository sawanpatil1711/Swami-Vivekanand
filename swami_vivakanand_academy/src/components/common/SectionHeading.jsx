import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      viewport={{ once: true }}
    >
      <span className="font-semibold uppercase tracking-[4px] text-blue-600">
        {subtitle}
      </span>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;