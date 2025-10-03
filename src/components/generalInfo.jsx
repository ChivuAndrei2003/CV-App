import idicon from "../assets/idicon.svg";
//tutorial https://www.geeksforgeeks.org/reactjs/create-a-form-using-reactjs/
export function GeneralInfo({ values, onChange, onSubmit, onReset }) {
  const { firstName, lastName, email, phoneNum, aboutMe } = values;

  return (
    <form
      action="#"
      method="get"
      className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
      onSubmit={onSubmit}
    >
      <h1 className="flex text-2xl text-center justify-center items-center gap-2">
        <img src={idicon} className="h-6 w-6  justify-center" /> Personal Info
      </h1>
      <label
        htmlFor="firstName"
        className="block text-sm font-semibold text-slate-600"
      >
        First Name*
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="Enter First Name"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="lastName"
        className="block text-sm font-semibold text-slate-600"
      >
        Last Name*
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Enter Last Name"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="email"
        className="block text-sm font-semibold text-slate-600"
      >
        Enter Email*
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Enter email"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="phone"
        className="block text-sm font-semibold text-slate-600"
      >
        Contact*
        <input
          type="tel"
          name="phoneNum"
          id="phoneNum"
          value={phoneNum}
          onChange={onChange}
          placeholder="Enter Mobile number"
          required
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </label>

      <label
        htmlFor="aboutMe"
        className="block text-sm font-semibold text-slate-600"
      >
        About
        <textarea
          name="aboutMe"
          id="aboutMe"
          cols="30"
          rows="10"
          value={aboutMe}
          onChange={onChange}
          placeholder="About your self"
          required
          className="block h-32 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        ></textarea>
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
          value="submit"
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
