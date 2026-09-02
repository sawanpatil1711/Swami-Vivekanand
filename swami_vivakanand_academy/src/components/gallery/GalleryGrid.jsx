import { motion } from "framer-motion";
import Container from "../common/Container";

const images = [
  {
    id: 1,
    title: "Annual Function",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  },
  {
    id: 2,
    title: "Sports Day",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
  {
    id: 3,
    title: "Science Exhibition",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 4,
    title: "Computer Lab",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 5,
    title: "Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
  },
  {
    id: 6,
    title: "Classroom",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
  },
];

const GalleryGrid = () => {
  return (
    <section className="bg-slate-50 py-10">
      <Container>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-blue-600">
            Gallery
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            School Moments
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore memorable moments, events, activities, and campus life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-200">
                      Click to view more
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GalleryGrid;