import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    // primary: {
    //     light: '#0000ff',
    //     main: '#0000ff',
    //     dark: '#0000ff',
    //     contrastText: '#0000ff'
    // },
    // secondary: {
    //     light: '#0000ff',
    //     main: '#0000ff',
    //     dark: '#0000ff',
    //     contrastText: '#0000ff'
    // }
  },
});

export default theme;
