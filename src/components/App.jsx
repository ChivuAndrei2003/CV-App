import Header from "./header.jsx";
import { GeneralInfo } from "./generalInfo.jsx";
import { useState } from "react";
import { EducationInfo } from "./eduInfo.jsx";
import { ExperienceInfo } from "./expInfo.jsx";
export default function App() {
  const [formData, setFormData] = useState({
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
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit :", formData);
  }

  function handleReset() {
    setFormData({
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
    });
  }
  return (
    <>
      <Header />
      <GeneralInfo
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
      <EducationInfo
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
      <ExperienceInfo
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </>
  );
}
