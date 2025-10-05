import penicon from "../assets/penicon.svg";
import "../styles/forms.css";

export function EducationInfo({ values, onChange, onReset, onSubmit }) {
  const { school, degree, dateStudyStart, dateStudyEnd } = values;

  return (
    <form className="form-section" onSubmit={onSubmit}>
      <h1 className="form-title">
        <img src={penicon} className="form-title-icon" alt="Education" />
        Education Info
      </h1>
      <label htmlFor="school" className="form-label">
        University name*
        <input
          type="text"
          name="school"
          id="school"
          value={school}
          onChange={onChange}
          placeholder="Enter institution"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="degree" className="form-label">
        Degree*
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={onChange}
          placeholder="Enter degree"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="dateStudyStart" className="form-label">
        Start date*
        <input
          type="date"
          name="dateStudyStart"
          id="dateStudyStart"
          value={dateStudyStart}
          onChange={onChange}
          max={dateStudyEnd || undefined}
          required
          className="form-input"
        />
      </label>

      <label htmlFor="dateStudyEnd" className="form-label">
        End date*
        <input
          type="date"
          name="dateStudyEnd"
          id="dateStudyEnd"
          value={dateStudyEnd}
          onChange={onChange}
          min={dateStudyStart || undefined}
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
          Add education
        </button>
      </div>
    </form>
  );
}
