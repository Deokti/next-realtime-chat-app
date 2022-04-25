import "../theme/theme.css";
import "macro-css";
import "../styles/bootstrap-reboot.min.scss";
import "../styles/globals.scss";
import "@fontsource/roboto";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} 