import React from "react";
import ReactDOM from "react-dom/client"; // updated import for React 18
import "./index.css"; // Your CSS file
import LandingPage from "./LandingPage"; // Assuming this is the component you're rendering

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);



