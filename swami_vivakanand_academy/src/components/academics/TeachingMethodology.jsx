import { BookOpen, Laptop, Users } from "lucide-react";
import Container from "../common/Container";

const methods = [
  {
    title: "Concept-Based Learning",
    icon: BookOpen,
  },
  {
    title: "Smart Classrooms",
    icon: Laptop,
  },
  {
    title: "Collaborative Activities",
    icon: Users,
  },
];

const TeachingMethodology = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <h2 className="mb-10 text-center text-4xl font-bold">
          Teaching Methodology
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {methods.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 text-center shadow"
              >
                <Icon
                  className="mx-auto mb-5 text-blue-700"
                  size={40}
                />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TeachingMethodology;