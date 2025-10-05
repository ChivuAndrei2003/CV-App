import workicon from "../assets/workicon.svg";
import "../styles/forms.css";

export function ExperienceInfo({ values, onChange, onReset, onSubmit }) {
  const {
    companyName,
    positionTitle,
    jobResponsibilities,
    workStart,
    workEnd,
  } = values;

  return (
    <form className="form-section" onSubmit={onSubmit}>
      <h1 className="form-title">
        <img src={workicon} className="form-title-icon" alt="Experience" />
        Experience
      </h1>

      <label htmlFor="companyName" className="form-label">
        Company name*
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={companyName}
          onChange={onChange}
          placeholder="Enter company name"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="positionTitle" className="form-label">
        Position title*
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          value={positionTitle}
          onChange={onChange}
          placeholder="Enter position title"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="jobResponsibilities" className="form-label">
        Main responsibilities*
        <textarea
          name="jobResponsibilities"
          id="jobResponsibilities"
          rows="6"
          value={jobResponsibilities}
          onChange={onChange}
          placeholder="List key responsibilities"
          required
          className="form-input textarea-vertical"
        ></textarea>
      </label>

      <label htmlFor="workStart" className="form-label">
        Date from*
        <input
          type="date"
          name="workStart"
          id="workStart"
          value={workStart}
          onChange={onChange}
          max={workEnd || undefined}
          required
          className="form-input"
        />
      </label>

      <label htmlFor="workEnd" className="form-label">
        Date until*
        <input
          type="date"
          name="workEnd"
          id="workEnd"
          value={workEnd}
          onChange={onChange}
          min={workStart || undefined}
          required
          className="form-input"
        />
      </label>

      <div className="form-actions">
        <button
          type="button"
          value="reset"
          onClick={onReset}
          className="button button-secondary"
        >
          Reset
        </button>
        <button
          type="submit"
          className="button button-primary"
        >
          Add experience
        </button>
      </div>
    </form>
  );
}
