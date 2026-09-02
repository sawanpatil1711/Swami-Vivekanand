import Container from "../common/Container";
import admissionbg from "../../assets/hero/admission.png"

const AdmissionOverview = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={admissionbg}
            alt="Admissions"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <span className="font-semibold uppercase tracking-[3px] text-blue-600">
              Admissions
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Join Our Learning Community
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We welcome students who are eager to learn and grow in a safe,
              inclusive, and inspiring environment. Admissions are open for the
              current academic session.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionOverview;