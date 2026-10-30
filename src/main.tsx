import "./runtime/platform";
import "./runtime/factories";
import { createRoot } from "react-dom/client";
import App from "./App";
import PreviewErrorBoundary from './PreviewErrorBoundary';
import "./styles/reference.css";
createRoot(document.getElementById("root")!).render(<PreviewErrorBoundary><App /></PreviewErrorBoundary>);
