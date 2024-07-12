import { useState } from "react";
export default function BetterSignupForm() {
  const [formdata, setFormData] = useState({ firstName: "", lastName: "" });
  const handleChange = (e) => {
    const changeField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      currData[changeField] = newValue;
      return { ...currData };
    });
  };

  const handleSubmit = () => {
    console.log(formdata);
  };
  return (
    <div>
      {/* to use label for our input we use htmlfor property and match this with the id of the input element
    here id of onput is username so htmlfor will be = to username */}
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={formdata.firstName}
        onChange={handleChange}
        name="firstName" // name should match exactly with the propery name in piece of state object
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={formdata.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
