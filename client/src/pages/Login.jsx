import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bgImg from "../assets/bg-img.jpg";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from "../components/layouts/Footer";
import MetaData from "../components/layouts/MetaData";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const BackUrl = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BackUrl}/api/verify/login`, { email, password })
      .then((res) => {
        console.log("login: " + res.data);
        if (res.status === 200) {
          if (res.data.role === "admin") {
            navigate("/control");
          } else {
            navigate("/home");
          }
        }
      })
      .catch((err) => {
        setError("Please check your credentials.");
        console.error("Login error: ", err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <Navbar expand="lg" className="bg-primary">
        <Container className='text-white'>
          <Navbar.Brand href="/" className='text-white fw-3'>
            ENERGY MONITORING SYSTEM
          </Navbar.Brand>
        </Container>
      </Navbar>
      <MetaData title={'Login'} />

      <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
        <h5 className="text-primary bg-white p-2" style={{ borderRadius: "5px" }}>
          KRISHCA STRAPING SOLUTIONS PVT LTD
        </h5>
      </div>

      <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "75vh" }}>
        <div className="bg-light p-4 rounded w-25 border border-primary border-3">
          <h2 className="text-primary d-flex justify-content-center align-items-center">Login</h2>
          {error && <p className="alert alert-danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-primary">
              <label htmlFor="email-input">
                <strong>Email</strong>
              </label>
              <input
                id="email-input" // Use id matching the label's "htmlFor"
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 text-primary">
              <label htmlFor="password-input">
                <strong>Password</strong>
              </label>
              <input
                id="password-input" // Use id matching the label's "htmlFor"
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-10">
              Login
            </button>
            <p className="mt-3 mb-3 text-primary d-flex justify-content-center align-items-center">
              Click Here to Login
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
