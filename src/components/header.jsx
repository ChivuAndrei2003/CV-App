import pdfIcon from "../assets/pdficon.svg";
import documenticon from "../assets/documenticon.svg";
import "../styles/header.css";

export function Header({ onAutofill, onSave }) {
  return (
    <header className="app-header">
      <h1 className="app-header__title">CV App</h1>
      <div className="header-actions">
        <button type="button" onClick={onSave} className="header-button">
          <img
            src={pdfIcon}
            alt="Generate PDF"
            className="header-button__icon"
          />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onAutofill}
          className="header-button"
        >
          <img
            src={documenticon}
            alt="Autofill"
            className="header-button__icon"
          />
          <span>Autofill</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
