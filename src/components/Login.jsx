import { useState } from "react";
import { useAuth } from "../context/AuthConotext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("test@mail.com");
  const [password, setPassword] = useState("123");

  let navigate = useNavigate();

  const { login, user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/dashboard");
  };

  console.log(user);

  return (
    <div>
      <form
        className="flex flex-col items-center gap-4 mt-10"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Email"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          value={username}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          value={password}
        />
        <div>
          <button className="btn btn-neutral" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
