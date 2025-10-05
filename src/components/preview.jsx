import { forwardRef } from "react";
import "../styles/preview.css";
const PreviewCv = forwardRef(function PreviewCv(
  { values, educationHistory = [], experienceHistory = [] },
  ref
) {
  const {
    firstName,
    lastName,
    email,
    phoneNum,
    aboutMe,
    school,
    degree,
    dateStudyStart,
    dateStudyEnd,
    companyName,
    positionTitle,
    jobResponsibilities,
    workStart,
    workEnd,
  } = values;

  const fullName =
    [firstName, lastName].filter(Boolean).join(" ") || "Your Name";
  //
  //
  const contactLine =
    [email, phoneNum].filter(Boolean).join(" • ") ||
    "email@example.com • (000) 000-0000";
  //
  const normalizeResponsibilities = (responsibilities = "") =>
    responsibilities
      .split(/\r?\n|,/) // accept commas or new lines
      .map((item) => item.trim())
      .filter(Boolean);

  // Helpers to make item computation easier to read
  const hasAny = (...vals) => vals.some(Boolean);

  function getEducationItems() {
    if (educationHistory.length > 0) return educationHistory;
    const hasInlineEducation = hasAny(
      school,
      degree,
      dateStudyStart,
      dateStudyEnd
    );
    if (hasInlineEducation) {
      return [{ school, degree, dateStudyStart, dateStudyEnd }];
    }
    return [];
  }

  function getExperienceItems() {
    if (experienceHistory.length > 0) return experienceHistory;
    const hasInlineExperience = hasAny(
      companyName,
      positionTitle,
      jobResponsibilities,
      workStart,
      workEnd
    );
    if (hasInlineExperience) {
      return [
        { companyName, positionTitle, jobResponsibilities, workStart, workEnd },
      ];
    }
    return [];
  }

  const educationItems = getEducationItems();
  const experienceItems = getExperienceItems();

  return (
    <section ref={ref} className="preview-card">
      <header className="preview-card__header">
        <h2 className="preview-card__name">{fullName}</h2>
        <p className="preview-card__contact">{contactLine}</p>
      </header>

      <div className="preview-card__body">
        <section className="preview-section preview-section--intro">
          <h3 className="preview-section__title">About Me</h3>
          <p className="preview-section__description">
            {aboutMe ||
              "Write a short introduction about yourself to see it here."}
          </p>
        </section>

        <section className="preview-section">
          <h3 className="preview-section__title">Education</h3>
          <div className="preview-list">
            {educationItems.length === 0 && (
              <p className="preview-empty">
                Add your schools to see them listed here.
              </p>
            )}

            {educationItems.map((entry, index) => {
              const {
                school: entrySchool,
                degree: entryDegree,
                dateStudyStart: start,
                dateStudyEnd: end,
              } = entry;
              const period =
                [start, end].filter(Boolean).join(" – ") || "Period";

              return (
                <article
                  key={`education-${index}`}
                  className="preview-item"
                >
                  <div className="preview-item__header">
                    <div>
                      <p className="preview-item__heading">
                        {entrySchool || "Institution"}
                      </p>
                      <p className="preview-item__subheading">
                        {entryDegree || "Degree"}
                      </p>
                    </div>
                    <span className="preview-item__period">
                      {period}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="preview-section">
          <h3 className="preview-section__title">Experience</h3>
          <div className="preview-list">
            {experienceItems.length === 0 && (
              <p className="preview-empty">
                Add your roles to see them listed here.
              </p>
            )}

            {experienceItems.map((entry, index) => {
              const {
                companyName: entryCompany,
                positionTitle: entryPosition,
                jobResponsibilities: entryResponsibilities,
                workStart: start,
                workEnd: end,
              } = entry;
              const period =
                [start, end].filter(Boolean).join(" – ") || "Period";
              const responsibilities = normalizeResponsibilities(
                entryResponsibilities
              );

              return (
                <article
                  key={`experience-${index}`}
                  className="preview-item"
                >
                  <div className="preview-item__header">
                    <div>
                      <p className="preview-item__heading">
                        {entryCompany || "Company"}
                      </p>
                      <p className="preview-item__subheading">
                        {entryPosition || "Title"}
                      </p>
                    </div>
                    <span className="preview-item__period">
                      {period}
                    </span>
                  </div>
                  {responsibilities.length > 0 ? (
                    <ul className="preview-responsibilities">
                      {responsibilities.map((item, responsibilityIndex) => (
                        <li
                          key={`experience-${index}-responsibility-${responsibilityIndex}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="preview-empty">
                      Add responsibilities separated by commas or new lines to
                      display them here.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
});
export default PreviewCv;
