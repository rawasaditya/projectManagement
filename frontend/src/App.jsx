import AuthContainer from "./Component/Login/AuthContainer";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loggedIn } from "../store/slice/authSlice.js";
import axios from "./utils/axiosConfig.js";
function App() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/auth/isLoggedIn")
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(loggedIn(true));
      })
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(loggedIn(false));
        }
      });
    console.log(auth);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={auth.isLoggedIn}>HOME</ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
