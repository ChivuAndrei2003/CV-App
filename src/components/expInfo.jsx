import workicon from "../assets/workicon.svg";

export function ExperienceInfo({ values, onChange, onSubmit, onReset }) {
  const {
    companyName,
    positionTitle,
    jobResponsibilities,
    workStart,
    workEnd,
  } = values;

  return (
    <>
      <form
        action="#"
        method="get"
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
      >
        <h1 className="flex text-2xl text-center justify-center items-center gap-2">
          <img src={workicon} className="h-6 w-6  justify-center" /> Experience
        </h1>

        <label htmlFor="companyName" className="block text-sm font-semibold text-slate-600">
          Company name:*
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={onChange}
            placeholder="Enter company name"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label htmlFor="positionTitle" className="block text-sm font-semibold text-slate-600">
          Position title:*
          <input
            type="text"
            name="positionTitle"
            id="positionTitle"
            value={positionTitle}
            onChange={onChange}
            placeholder="Enter position title"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label htmlFor="jobResponsibilities" className="block text-sm font-semibold text-slate-600">
          Main responsibilities of your job:*
          <textarea
            name="jobResponsibilities"
            id="jobResponsibilities"
            rows="6"
            value={jobResponsibilities}
            onChange={onChange}
            placeholder="List key responsibilities, separated by commas or lines"
            required
            className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          ></textarea>
        </label>

        <label htmlFor="workStart" className="block text-sm font-semibold text-slate-600">
          Date from:*
          <input
            type="date"
            name="workStart"
            id="workStart"
            value={workStart}
            onChange={onChange}
            max={workEnd || undefined}
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label htmlFor="workEnd" className="block text-sm font-semibold text-slate-600">
          Date until:*
          <input
            type="date"
            name="workEnd"
            id="workEnd"
            value={workEnd}
            onChange={onChange}
            min={workStart || undefined}
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
            value="Submit"
            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
