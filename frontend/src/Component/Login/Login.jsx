import { useState } from "react";
import axios from "../../utils/axiosConfig.js";
import { Button } from "rawasui/dist/Buttons";
import { TextField } from "rawasui/dist/TextField";
import { useSelector, useDispatch } from "react-redux";
import { loggedIn } from "../../../store/slice/authSlice.js";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const login = () => {
    setLoading(true);
    axios
      .post("auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response?.data?.token);
        setLoading(false);
        dispatch(loggedIn(true));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="text-6xl">Hello Again</h2>
      <p className="pt-2 text-gray-500">
        Welcome back you&apos;ve been missed !
      </p>
      <div className="flex flex-col items-center w-3/4 gap-4 mt-11">
        <TextField
          type="email"
          placeholder="Email address"
          name="email"
          className="w-full mb-3"
          value={email}
          size="lg"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="email"
          className="w-full"
          value={password}
          size="lg"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a className="w-full text-sm text-right" href="#">
          Recover Password
        </a>
        <Button
          color="primary"
          variant="contain"
          onClick={login}
          loading={loading}
          className="w-full"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
