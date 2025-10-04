import { useState } from "react";
import Header from "./header.jsx";
import { GeneralInfo } from "./generalInfo.jsx";
import { EducationInfo } from "./eduInfo.jsx";
import { ExperienceInfo } from "./expInfo.jsx";
import PreviewCv from "./preview.jsx";
import { demoCvData } from "./autofillCv.jsx";

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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setFormData(emptyForm);
    setEducationHistory([]);
    setExperienceHistory([]);
  }

  function handleAutofill(data) {
    setFormData((prev) => ({ ...prev, ...data }));
    setEducationHistory([]);
    setExperienceHistory([]);
  }

  function handleSave() {
    console.log("Save handler not implemented yet.", formData);
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
        onSave={handleSave}
      />
      <GeneralInfo
        values={formData}
        onChange={handleChange}
        onReset={handleReset}
      />
      <EducationInfo
        values={formData}
        onChange={handleChange}
        onReset={handleReset}
        onSubmit={handleEducationSubmit}
      />
      <ExperienceInfo
        values={formData}
        onChange={handleChange}
        onReset={handleReset}
        onSubmit={handleExperienceSubmit}
      />
      <PreviewCv
        values={formData}
        educationHistory={educationHistory}
        experienceHistory={experienceHistory}
      />
    </>
  );
}
