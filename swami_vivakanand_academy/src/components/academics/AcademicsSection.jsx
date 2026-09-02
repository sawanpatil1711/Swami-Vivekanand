import Container from "../common/Container";
import acadmicsbg from "../../assets/hero/academics.png"

const AcademicsSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={acadmicsbg}
            alt="Students Learning"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <span className="font-semibold uppercase tracking-[3px] text-blue-600">
              Academics
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Excellence in Learning
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our academic program combines strong fundamentals with
              innovation, critical thinking, and practical learning to help
              students excel in every stage of their education.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AcademicsSection;