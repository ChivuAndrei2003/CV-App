import pdfIcon from "../assets/pdficon.svg";
import documenticon from "../assets/documenticon.svg";

export function Header({ onAutofill, onSave }) {
  return (
    <header className="mx-auto mt-2 max-w-2xl flex-col items-center justify-center rounded-2xl bg-slate-800 px-6 py-4 text-white shadow-lg">
      <h1 className="text-center text-3xl font-semibold tracking-wide">
        CV App
      </h1>
      <div className="mt-4 flex gap-4 justify-end">
        <button
          type="button"
          onClick={onSave}
          className="flex items-center gap-1 rounded-full bg-slate-700 px-4 py-2 text-sm font-medium transition hover:bg-slate-600"
        >
          <img src={pdfIcon} alt="Generate PDF" className="h-6 w-6" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onAutofill}
          className="flex items-center gap-1 rounded-full bg-slate-700 px-4 py-2 text-sm font-medium transition hover:bg-slate-600"
        >
          <img src={documenticon} alt="Autofill" className="h-6 w-6" />
          <span>Autofill</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
