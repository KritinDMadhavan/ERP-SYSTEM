import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "./components/common/NoPage";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./pages/Login";
import ExcelUpload from "./pages/ExcelUpload";
import RequireAuth from "./components/common/RequireAuth";

import axiosInstance from "./API/axios";
import axios from "axios";

axiosInstance.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    // prettier-ignore
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<RequireAuth> <Dashboard /> </RequireAuth>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
          <Route exact path="/excel" element={<RequireAuth> <ExcelUpload /> </RequireAuth>}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
