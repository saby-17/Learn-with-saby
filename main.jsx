import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Notes from "./pages/Notes.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,    // Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "notes", element: <Notes /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
