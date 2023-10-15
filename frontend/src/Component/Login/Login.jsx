import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2 className="text-6xl">Hello Again</h2>
      <p className="pt-2 text-gray-500">
        Welcome back you&apos;ve been missed !
      </p>
      <div className="flex flex-col items-center w-3/4 gap-4 mt-11">
        <TextInput
          type="email"
          placeholder="Email address"
          name="email"
          className="w-full mb-3"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <TextInput
          type="password"
          placeholder="Password"
          name="email"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a className="w-full text-sm text-right" href="#">
          Recover Password
        </a>
        <Button>Login</Button>
      </div>
    </>
  );
};

export default Login;