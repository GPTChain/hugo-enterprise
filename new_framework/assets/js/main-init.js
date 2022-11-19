//
import { initThemeVariation } from "./theming";

import { themeType } from "@params";

window.$hugo = {
  themeType,
};

// CMS authentication
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Initialize theme variation and set body theme class.
initThemeVariation();

// For Plotly compatibility with MathJax (must appear prior to loading Plotly).
window.PlotlyConfig = { MathJaxConfig: "local" };
