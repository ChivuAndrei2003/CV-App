import penicon from "../assets/penicon.svg";

export function EducationInfo({ values, onChange, onReset, onSubmit }) {
  const { school, degree, dateStudyStart, dateStudyEnd } = values;

  return (
    <form
      className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
      onSubmit={onSubmit}
    >
      <h1 className="flex text-2xl text-center justify-center items-center gap-2">
        <img src={penicon} className="h-6 w-6 justify-center" alt="Education" />
        Education Info
      </h1>
      <label
        htmlFor="school"
        className="block text-sm font-semibold text-slate-600"
      >
        University name*
        <input
          type="text"
          name="school"
          id="school"
          value={school}
          onChange={onChange}
          placeholder="Enter institution"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="degree"
        className="block text-sm font-semibold text-slate-600"
      >
        Degree*
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={onChange}
          placeholder="Enter degree"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="dateStudyStart"
        className="block text-sm font-semibold text-slate-600"
      >
        Start date*
        <input
          type="date"
          name="dateStudyStart"
          id="dateStudyStart"
          value={dateStudyStart}
          onChange={onChange}
          max={dateStudyEnd || undefined}
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="dateStudyEnd"
        className="block text-sm font-semibold text-slate-600"
      >
        End date*
        <input
          type="date"
          name="dateStudyEnd"
          id="dateStudyEnd"
          value={dateStudyEnd}
          onChange={onChange}
          min={dateStudyStart || undefined}
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="reset"
          value="reset"
          onClick={onReset}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          Reset
        </button>
        <button
          type="submit"
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Add education
        </button>
      </div>
    </form>
  );
}
