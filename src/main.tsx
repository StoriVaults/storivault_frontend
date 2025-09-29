import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set document title
document.title = "StoriVault - Your Gateway to Infinite Stories";

createRoot(document.getElementById("root")!).render(<App />);
