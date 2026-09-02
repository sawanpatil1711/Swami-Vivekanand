import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const principal = {
  name: "Mr. Rohit Vaidhya",
  role: "Principal",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700",
  message:
    "At Swami Vivekanand Academy, we believe every child is unique and deserves an environment where curiosity, creativity, and confidence can flourish. Our mission is to nurture responsible, compassionate, and lifelong learners through quality education and strong values.",
};

const PrincipalSection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          subtitle="Principal's Message"
          title="A Message from Our Principal"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-md">
            <motion.img
              src={principal.image}
              alt={principal.name}
              className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="border-l-4 border-blue-600 pl-5 text-lg leading-8 text-gray-600">
              {principal.message}
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold">{principal.name}</h3>
              <p className="text-blue-600">{principal.role}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PrincipalSection;
