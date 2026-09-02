import Container from "../common/Container";

const steps = [
  "Submit the admission enquiry.",
  "Visit the school campus.",
  "Submit the required documents.",
  "Complete the admission formalities.",
];

const AdmissionProcess = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Admission Process
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-medium text-gray-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AdmissionProcess;