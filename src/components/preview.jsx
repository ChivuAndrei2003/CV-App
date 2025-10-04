export default function PreviewCv({
  values,
  educationHistory = [],
  experienceHistory = [],
}) {
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
    <section className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <header className="bg-slate-800 px-6 py-5 text-white">
        <h2 className="text-2xl font-semibold tracking-wide">{fullName}</h2>
        <p className="mt-2 text-sm text-slate-200">{contactLine}</p>
      </header>

      <div className="space-y-6 px-6 py-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-800">About Me</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {aboutMe ||
              "Write a short introduction about yourself to see it here."}
          </p>
        </section>

        <section className="border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-800">Education</h3>
          <div className="mt-4 flex flex-col gap-4">
            {educationItems.length === 0 && (
              <p className="text-sm text-slate-500">
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
              const period = [start, end].filter(Boolean).join(' – ') || 'Period';

              return (
                <article
                  key={`education-${index}`}
                  className="rounded-lg border border-slate-200 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {entrySchool || "Institution"}
                      </p>
                      <p className="text-sm text-slate-600">
                        {entryDegree || "Degree"}
                      </p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {period}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-800">Experience</h3>
          <div className="mt-4 flex flex-col gap-4">
            {experienceItems.length === 0 && (
              <p className="text-sm text-slate-500">
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
              const period = [start, end].filter(Boolean).join(' – ') || 'Period';
              const responsibilities = normalizeResponsibilities(
                entryResponsibilities
              );

              return (
                <article
                  key={`experience-${index}`}
                  className="rounded-lg border border-slate-200 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {entryCompany || "Company"}
                      </p>
                      <p className="text-sm text-slate-600">
                        {entryPosition || "Title"}
                      </p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {period}
                    </span>
                  </div>
                  {responsibilities.length > 0 ? (
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
                      {responsibilities.map((item, responsibilityIndex) => (
                        <li
                          key={`experience-${index}-responsibility-${responsibilityIndex}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-slate-500">
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
}
