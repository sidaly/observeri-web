import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Prerendering saves browser DOM snapshots, not React server-rendered markup.
// Mount the interactive app normally; the static HTML remains available to crawlers.
createRoot(rootElement).render(<App />);
