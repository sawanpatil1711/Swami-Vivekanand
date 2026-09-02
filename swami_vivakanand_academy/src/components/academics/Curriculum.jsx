import Container from "../common/Container";

const Curriculum = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <h2 className="mb-10 text-center text-4xl font-bold">
          Curriculum
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Pre-Primary",
            "Primary",
            "Secondary",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-8 shadow"
            >
              <h3 className="text-2xl font-semibold">{item}</h3>

              <p className="mt-4 text-gray-600">
                Comprehensive learning designed for every stage of a
                student's academic journey.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Curriculum;