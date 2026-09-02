import { Eye, Target } from "lucide-react";
import Container from "../common/Container";

const VisionMission = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow">
            <Eye className="mb-4 text-blue-700" size={40} />
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To inspire every student to become a lifelong learner and a
              responsible global citizen.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <Target className="mb-4 text-blue-700" size={40} />
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide quality education through innovation, values,
              leadership, and academic excellence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;