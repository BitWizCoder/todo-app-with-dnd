import axios from "axios";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, username, password })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        className="flex flex-col items-center gap-4 mt-10"
        onSubmit={handleRegister}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <div>
          <button className="btn btn-neutral" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
