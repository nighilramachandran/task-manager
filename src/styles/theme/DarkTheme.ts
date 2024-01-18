import { ThemeOptions } from "@mui/material/styles";
import { componetnsOverrides } from "./overrides/components";
import { typographyStylesOverrides } from "./overrides/components/TypographyFontStyle";
import { typographyOverride } from "./overrides/components/Typography";
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#6b53fe",
      dark: "#000000",
    },
    background: {
      default: "#060226",
      header: "#231b41",
    },
    primary: {
      main: "#6b53fe",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default darkThemeOptions;
