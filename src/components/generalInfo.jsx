import idicon from "../assets/idicon.svg";
import "../styles/forms.css";

//tutorial https://www.geeksforgeeks.org/reactjs/create-a-form-using-reactjs/
export function GeneralInfo({ values, onChange, onReset }) {
  const { firstName, lastName, email, phoneNum, aboutMe } = values;

  return (
    <form className="form-section">
      <h1 className="form-title">
        <img src={idicon} className="form-title-icon" alt="Personal info" />
        Personal Info
      </h1>
      <label htmlFor="firstName" className="form-label">
        First Name*
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="Enter First Name"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="lastName" className="form-label">
        Last Name*
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Enter Last Name"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="email" className="form-label">
        Enter Email*
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Enter email"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="phoneNum" className="form-label">
        Contact*
        <input
          type="tel"
          name="phoneNum"
          id="phoneNum"
          value={phoneNum}
          onChange={onChange}
          placeholder="Enter mobile number"
          required
          className="form-input"
        />
      </label>

      <label htmlFor="aboutMe" className="form-label">
        About
        <textarea
          name="aboutMe"
          id="aboutMe"
          cols="30"
          rows="10"
          value={aboutMe}
          onChange={onChange}
          placeholder="Tell us about yourself"
          required
          className="form-input textarea-fixed"
        ></textarea>
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
      </div>
    </form>
  );
}
