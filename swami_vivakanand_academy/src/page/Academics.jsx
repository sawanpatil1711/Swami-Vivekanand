import AcademicsSection from "../components/academics/AcademicsSection";
import Curriculum from "../components/academics/Curriculum";
import ClassesOffered from "../components/academics/ClassesOffered";
import TeachingMethodology from "../components/academics/TeachingMethodology";
import AdmissionCTA from "../components/home/AdmissionCTA";

const Academics = () => {
  return (
    <>
      <AcademicsSection />
      <Curriculum />
      <ClassesOffered />
      <TeachingMethodology />
      <AdmissionCTA />
    </>
  );
};

export default Academics;