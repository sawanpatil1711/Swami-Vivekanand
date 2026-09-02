import { FileText } from "lucide-react";
import Container from "../common/Container";

const docs = [
  "Birth Certificate",
  "Previous School Report Card",
  "Transfer Certificate (if applicable)",
  "Two Passport Size Photographs",
  "Aadhar Card (Student & Parent)",
  "Samagra ID",
  "Caste Certificate",
];

const RequiredDocuments = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Required Documents
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {docs.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-4 rounded-xl border p-5 transition hover:border-blue-600 hover:shadow-md"
            >
              <FileText className="text-blue-700" size={24} />
              <span className="font-medium">{doc}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RequiredDocuments;