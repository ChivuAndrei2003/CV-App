import { useState, useRef } from "react";
import Header from "./header.jsx";
import { GeneralInfo } from "./generalInfo.jsx";
import { EducationInfo } from "./eduInfo.jsx";
import { ExperienceInfo } from "./expInfo.jsx";
import PreviewCv from "./preview.jsx";
import { demoCvData } from "./autofillCv.jsx";
import { useSaveCv } from "./SaveCV.jsx";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  aboutMe: "",
  school: "",
  degree: "",
  dateStudyStart: "",
  dateStudyEnd: "",
  companyName: "",
  positionTitle: "",
  jobResponsibilities: "",
  workStart: "",
  workEnd: "",
};

export default function App() {
  const [formData, setFormData] = useState(emptyForm);
  const [educationHistory, setEducationHistory] = useState([]);
  const [experienceHistory, setExperienceHistory] = useState([]);
  const previewRef = useRef(null);

  const handlePrint = useSaveCv({
    targetRef: previewRef,
    fileName: `${formData.firstName || "CV"}-${formData.lastName || "Preview"}`,
    onAfterSave: () => console.log("Document saved."),
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  /*function handleGenInfoReset() {
    
  } */
  function resetGeneralInfo() {
    setFormData((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      aboutMe: "",
    }));
  }

  function resetEducationForm() {
    setFormData((prev) => ({
      ...prev,
      school: "",
      degree: "",
      dateStudyStart: "",
      dateStudyEnd: "",
    }));
  }

  function resetExperienceInfo() {
    setFormData((prev) => ({
      ...prev,
      companyName: "",
      positionTitle: "",
      jobResponsibilities: "",
      workStart: "",
      workEnd: "",
    }));
  }

  function handleAutofill(data) {
    setFormData((prev) => ({ ...prev, ...data }));
    setEducationHistory([]);
    setExperienceHistory([]);
  }

  

  function handleEducationSubmit(event) {
    //
    event.preventDefault();
    const { school, degree, dateStudyStart, dateStudyEnd } = formData;

    if (!school && !degree && !dateStudyStart && !dateStudyEnd) {
      return;
    }

    setEducationHistory((prev) => [
      ...prev,
      { school, degree, dateStudyStart, dateStudyEnd },
    ]);

    setFormData((prev) => ({
      ...prev,
      school: "",
      degree: "",
      dateStudyStart: "",
      dateStudyEnd: "",
    }));

    ////
  }

  function handleExperienceSubmit(event) {
    //
    event.preventDefault();
    const {
      companyName,
      positionTitle,
      jobResponsibilities,
      workStart,
      workEnd,
    } = formData;
    if (
      !companyName &&
      !positionTitle &&
      !jobResponsibilities &&
      !workStart &&
      !workEnd
    ) {
      return;
    }

    setExperienceHistory((prev) => [
      ...prev,
      { companyName, positionTitle, jobResponsibilities, workStart, workEnd },
    ]);

    setFormData((prev) => ({
      ...prev,
      companyName: "",
      positionTitle: "",
      jobResponsibilities: "",
      workStart: "",
      workEnd: "",
    }));
    ////
  }

  return (
    <>
      <Header
        onAutofill={() => handleAutofill(demoCvData)}
        onSave={handlePrint}
      />
      
      <GeneralInfo
        values={formData}
        onChange={handleChange}
        onReset={resetGeneralInfo}
      />
      <EducationInfo
        values={formData}
        onChange={handleChange}
        onReset={resetEducationForm}
        onSubmit={handleEducationSubmit}
      />
      <ExperienceInfo
        values={formData}
        onChange={handleChange}
        onReset={resetExperienceInfo}
        onSubmit={handleExperienceSubmit}
      />
      <PreviewCv 
        ref={previewRef}
        values={formData}
        educationHistory={educationHistory}
        experienceHistory={experienceHistory}
      />
    </>
  );
}
