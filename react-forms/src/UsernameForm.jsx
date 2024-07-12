import { useState } from "react";

export default function UsernameForm() {
  const [username, setusername] = useState("");
  const updateUsername = (e) => {
    setusername(e.target.value);
  };
  return (
    <div>
      {/* to use label for our input we use htmlfor property and match this with the id of the input element
    here id of onput is username so htmlfor will be = to username */}
      <label htmlFor="username"> Enter A Username: </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      {/* we use this value to get the input 
      so whatever the piece of state is will always going to show in the input
      here piece of state is username */}
      <button>Submit</button>
    </div>
  );
}
