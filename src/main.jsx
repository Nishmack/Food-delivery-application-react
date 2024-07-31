import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//A component from react-router-dom for enabling client-side routing.
import { BrowserRouter } from "react-router-dom";

// A context provider component for managing the global state.
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
// BrowserRouter:::Wraps the application to enable client-side routing using React Router.
// It allows the application to have multiple pages or views without a full page reload.
// StoreContextProvider:::Wraps the application to provide a global state using React Context API.
// This provider component manages the state for the entire application and makes it accessible to all its children.
// <App />::The main application component that will contain other components and routes.
// All the logic and structure of the application reside here.
