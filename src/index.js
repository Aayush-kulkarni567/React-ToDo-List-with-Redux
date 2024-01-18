import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the global styles for the application
import "./index.css";

// Import the Redux store
import store from "./store/store";

// Import the Provider component from react-redux to connect the Redux store to the React application
import { Provider } from "react-redux";

// Use ReactDOM.createRoot to render the application into the root element in the HTML document
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the entire application with React.StrictMode for additional development warnings and checks
  <React.StrictMode>
    {/* Use the Provider component to provide the Redux store to the entire React app */}
    <Provider store={store}>
      {/* Render the main App component, which contains the entire application */}
      <App />
    </Provider>
  </React.StrictMode>
);
