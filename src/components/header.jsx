import GenerateCV from "./SaveCV.jsx";
import pdfIcon from "../assets/pdficon.svg";
import documenticon from "../assets/documenticon.svg";

export function Header() {
  return (
    <header className="mx-auto mt-8 max-w-2xl flex-col items-center justify-center rounded-2xl bg-slate-800 px-6 py-4 text-white shadow-lg">
      <h1 className="text-center  text-3xl font-semibold tracking-wide">
        CV App
      </h1>
      <div className="mt-4 flex gap-4 justify-end ">
        <button
          type="button"
          onClick={GenerateCV}
          className="flex items-center gap-1 rounded-full  bg-slate-700 p-2 transition  hover:bg-slate-500 "
        >
          <img src={pdfIcon} alt="Generate PDF" className="h-6 w-6  " />
          <p className="text-m text-center ">Save</p>
        </button>
        <button
          type="button"
          onClick={GenerateCV}
          className="flex rounded-full gap-1 bg-slate-700 p-2 transition hover:bg-slate-600"
        >
          <img src={documenticon} alt="Autofill" className="h-6 w-6" />
          <p className="text-m text-center ">Autofill</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
