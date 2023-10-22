import { useState } from "react";
import { Button } from "rawasui/dist/Buttons";
import { TextField } from "rawasui/dist/TextField";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2 className="text-6xl">Hello...!</h2>
      <p className="pt-2 text-gray-500">Welcome</p>
      <div className="flex flex-col items-center gap-4 mt-11">
        <div className="flex gap-3">
          <TextField
            type="text"
            placeholder="First Name"
            name="fName"
            size="lg"
            className="w-full mb-3"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextField
            type="text"
            placeholder="Last Name"
            name="lName"
            size="lg"
            className="w-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <TextField
          type="email"
          placeholder="Email"
          name="lName"
          size="lg"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <TextField
          type="password"
          placeholder="Password"
          name="lName"
          size="lg"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          type="password"
          placeholder="Confirm password"
          name="lName"
          size="lg"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          color="primary"
          variant="contain"
          className="w-full"
          loading={false}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default Login;
