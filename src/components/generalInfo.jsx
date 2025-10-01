import { useState } from "react";
import idicon from "../assets/idicon.svg";
//tutorial https://www.geeksforgeeks.org/reactjs/create-a-form-using-reactjs/
export function GeneralInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phoneNum, aboutMe);
  };

  const handleReset = () => {
    setFirstName(""),
      setLastName(""),
      setEmail(""),
      setPhoneNum(""),
      setAboutMe("");
  };
  return (
    
    <form
      action="#"
      method="get"
      className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
    >
      <h1 className="flex text-2xl text-center justify-center items-center gap-2">
        <img src={idicon} className="h-6 w-6  justify-center"/> Personal Info</h1>
      <label
        htmlFor="firstname"
        className="block text-sm font-semibold text-slate-600"
      >
        First Name*
      </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
        required
        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <label
        htmlFor="lastname"
        className="block text-sm font-semibold text-slate-600"
      >
        Last Name*
      </label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
        required
        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-slate-600"
      >
        Enter Email*
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <label
        htmlFor="contact"
        className="block text-sm font-semibold text-slate-600"
      >
        Contact*
      </label>
      <input
        type="tel"
        name="contact"
        id="contact"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
        placeholder="Enter Mobile number"
        required
        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <label
        htmlFor="about"
        className="block text-sm font-semibold text-slate-600"
      >
        About
      </label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        onChange={(e) => setAboutMe(e.target.value)}
        placeholder="About your self"
        required
        className="block h-32 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      ></textarea>
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="reset"
          value="reset"
          onClick={() => handleReset()}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          Reset
        </button>
        <button
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
