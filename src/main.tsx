import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Wrap top-level render to surface runtime errors visibly in production builds.
try {
	createRoot(document.getElementById("root")!).render(<App />);
} catch (err) {
	// If rendering fails, inject a visible error overlay so the problem is easy to see.
	// This helps capture errors when the browser console isn't available.
	const pre = document.createElement("pre");
	pre.style.position = "fixed";
	pre.style.top = "0";
	pre.style.left = "0";
	pre.style.right = "0";
	pre.style.background = "#111";
	pre.style.color = "#ff6a00";
	pre.style.padding = "16px";
	pre.style.zIndex = "99999";
	pre.style.whiteSpace = "pre-wrap";
	pre.textContent = String(err instanceof Error ? err.stack || err.message : err);
	document.body.appendChild(pre);
	// Also log to console for developer tools
	// eslint-disable-next-line no-console
	console.error("Render error:", err);
}
