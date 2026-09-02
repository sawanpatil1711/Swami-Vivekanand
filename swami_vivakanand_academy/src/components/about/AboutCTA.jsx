import { Link } from "react-router-dom";
import Container from "../common/Container";

const AboutCTA = () => {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Ready to Join Our School?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Give your child the opportunity to learn, grow, and succeed in a
            caring and inspiring environment.
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Apply Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;