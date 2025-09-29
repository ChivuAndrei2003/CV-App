import { useState } from "react";
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
    <form action="#" method="get">
      <label htmlFor="firstname">First Name*</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
        required
      />
      <label htmlFor="lastname">Last Name*</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
        required
      />
      <label htmlFor="email">Enter Email* </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <label htmlFor="tel">Contact*</label>
      <input
        type="tel"
        name="contact"
        id="contact"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
        placeholder="Enter Mobile number"
        required
      />
      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        onChange={(e) => setAboutMe(e.target.value)}
        placeholder="About your self"
        required
      ></textarea>
      <button type="reset" value="reset" onClick={() => handleReset()}>
        Reset
      </button>
      <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
}
