import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PersistorProvider, PersistorClient } from "persistjs-react";

const client = new PersistorClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PersistorProvider client={client}>
      <App />
    </PersistorProvider>
  </React.StrictMode>
);
