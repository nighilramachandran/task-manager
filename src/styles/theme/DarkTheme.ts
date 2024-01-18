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
      default: "#101010",
      // default: "#060226",
      header: "#272727",
      secondary: "#070322",
      paper: "#272727",
    },
    primary: {
      main: "#d6357e",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default darkThemeOptions;
