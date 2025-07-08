export const themeStyles = {
    dark: {
      background: "#1b2a3b",
      headerBg: "#243447",
      panelBg: "#2d3e50",
      borderColor: "#3e5871",
      textColor: "#00ffff",
      navTextColor: "#e0f7fa",
      shadow: "0 2px 8px #0007",
      headerText: "#fff",
    },
    light: {
      background: "#fffef7",
      headerBg: "#f7f0e8",
      panelBg: "#ffffff",
      borderColor: "#e0cfc2",
      textColor: "#3e3e3e",
      navTextColor: "#4e3e2c",
      shadow: "0 2px 8px #aaa3",
      headerText: "#000",
    },
  };
  
  export type ThemeMode = keyof typeof themeStyles;
  