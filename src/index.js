import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import WeekView from "./components/WeekView";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/week-view", element: <WeekView />}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
