import React from "react";
import './bootstrap';
import { createRoot } from "react-dom/client";
import App from "./App";



console.log(document.getElementById('root'));
createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

