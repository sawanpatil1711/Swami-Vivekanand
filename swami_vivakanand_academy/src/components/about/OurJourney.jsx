import Container from "../common/Container";

const timeline = [
  { year: "1998", text: "School Established" },
  { year: "2008", text: "New Science & Computer Labs" },
  { year: "2018", text: "Smart Classrooms Introduced" },
  { year: "2025", text: "2500+ Students & 120+ Teachers" },
];

const OurJourney = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex items-center gap-6 border-l-4 border-blue-700 pl-6"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {item.year}
              </h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurJourney;