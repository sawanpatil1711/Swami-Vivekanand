import AdmissionOverview from "../components/admissions/AdmissionOverview";
import AdmissionProcess from "../components/admissions/AdmissionProcess";
import RequiredDocuments from "../components/admissions/RequiredDocuments";
import AdmissionCTA from "../components/home/AdmissionCTA";
import FeeStructure from "../components/admissions/FeeStructure";

const Admissions = () => {
  return (
    <>
      <AdmissionOverview />
      <AdmissionProcess />
      <RequiredDocuments />
      <FeeStructure />
      <AdmissionCTA />
    </>
  );
};

export default Admissions;