import { useState } from "react";

export default function SignupForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      {/* to use label for our input we use htmlfor property and match this with the id of the input element
    here id of onput is username so htmlfor will be = to username */}
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={updateLastName}
        id="lastname"
      />

      <button>Submit</button>
    </div>
  );
}
