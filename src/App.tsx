import React from "react";
import "./App.css";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { Box, CssBaseline } from "@mui/joy";
import Team from "./Team";
import Home from "./Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";


// TODO: change to pink color
const palette = {
  primary: {
    solidBg: "#dc428e",
    solidBorder: "#b33874",
    solidHoverBg: "#c92978",
    solidHoverBorder: "#ac3770",
    solidActiveBg: "#c22973",
    solidActiveBorder: "#a6376b",
    solidDisabledBg: "#c22973",
    solidDisabledBorder: "#a6376b",
  },
  neutral: {
    solidBg: "#6c757d",
    solidBorder: "#6c757d",
    solidHoverBg: "#5c636a",
    solidHoverBorder: "#565e64",
    solidActiveBg: "#565e64",
    solidActiveBorder: "#51585e",
    solidDisabledBg: "#6c757d",
    solidDisabledBorder: "#6c757d",
    // btn-light
    softColor: "#000",
    softBg: "#f8f9fa",
    softBorder: "#f8f9fa",
    softHoverBg: "#f9fafb",
    softHoverBorder: "#f9fafb",
    softActiveBg: "#f9fafb",
    softActiveBorder: "#f9fafb",
    softDisabledBg: "#f8f9fa",
    softDisabledBorder: "#f8f9fa",
  },
  success: {
    solidBg: "#198754",
    solidBorder: "#198754",
    solidHoverBg: "#157347",
    solidHoverBorder: "#146c43",
    solidActiveBg: "#146c43",
    solidActiveBorder: "#13653f",
    solidDisabledBg: "#198754",
    solidDisabledBorder: "#198754",
  },
  danger: {
    solidBg: "#dc3545",
    solidBorder: "#dc3545",
    solidHoverBg: "#bb2d3b",
    solidHoverBorder: "#b02a37",
    solidActiveBg: "#b02a37",
    solidActiveBorder: "#a52834",
    solidDisabledBg: "#dc3545",
    solidDisabledBorder: "#dc3545",
  },
  warning: {
    solidColor: "#000",
    solidBg: "#ffc107",
    solidBorder: "#ffc107",
    solidHoverBg: "#ffca2c",
    solidHoverBorder: "#ffc720",
    solidActiveBg: "#ffcd39",
    solidActiveBorder: "#ffc720",
    solidDisabledBg: "#ffc107",
    solidDisabledBorder: "#ffc107",
  },
  info: {
    solidBg: "#dc428e",
    solidBorder: "#b33874",
    solidHoverBg: "#c92978",
    solidHoverBorder: "#ac3770",
    solidActiveBg: "#c22973",
    solidActiveBorder: "#a6376b",
    solidDisabledBg: "#c22973",
    solidDisabledBorder: "#a6376b",
  },
};

const bootstrapTheme = extendTheme({
  cssVarPrefix: "bs",
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  // components: {
  //     JoyButton: {
  //         styleOverrides: {
  //             root: ({ ownerState, theme }) => ({
  //                 letterSpacing: 'normal',
  //                 fontWeight: theme.vars.fontWeight.md,
  //                 fontFamily: theme.vars.fontFamily.fallback,
  //                 outlineWidth: 0,
  //                 borderRadius: '0.375rem',
  //                 transition:
  //                     'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  //                 ...(ownerState.size === 'md' && {
  //                     paddingInline: '0.75rem',
  //                     minHeight: 38,
  //                 }),
  //             }),
  //         },
  //     },
  // },
});

function App() {
  return (
    <CssVarsProvider theme={bootstrapTheme} defaultMode="dark">
      <CssBaseline />
      <Box sx={{ minHeight: "100dvh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </CssVarsProvider>
  )
}

export default App;
