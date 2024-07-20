import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};
const Settings = () => {
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};
const SayUser = () => {
  const params = useParams();
  return (
    <div>
      <h1>Your Name is {params.userID}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* we wrap the wholw component in browserrouter to give it access to use routing
      now we create routes and inside them we create route */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path and element ar props
        means home page
        element specifies which component to render
        this line says that whihc component to render on / or home page */}
        <Route path="/about" element={<About />} />
        {/* now if i type in the url like localhost:5173/about it will render the about component */}

        {/* ------Dynamic Route------- */}

        <Route path="user/:userID" element={<SayUser />} />
        {/* ---- : means dynamic and we give variable name as userId ---- */}

        {/* Nested Route */}

        <Route path="Account">
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          {/* if i type localhost:5173/Account/profile it will render profile
          component same with settings also */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
