import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";

const container: HTMLElement | null = document.getElementById("app");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<h1 className="text-3xl">
    Hello world!
</h1>);
