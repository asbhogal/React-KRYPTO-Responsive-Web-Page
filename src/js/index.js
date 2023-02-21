import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";
import { register } from "swiper/element/bundle";

register();

const   rootElement = document.getElementById("root"),
        root = ReactDOM.createRoot(rootElement);

root.render (
    <App />
)