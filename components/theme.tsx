"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

export type ThemeName = "dark" | "light";

const ThemeContext = createContext<{ theme: ThemeName; toggle: () => void } | null>(null);

function readTheme(): ThemeName {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("themechange", onStoreChange);
  return () => window.removeEventListener("themechange", onStoreChange);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as ThemeName);

  function toggle() {
    const next: ThemeName = theme === "light" ? "dark" : "light";
    if (next === "dark") document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("themechange"));
  }

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("ThemeProvider is missing");
  return value;
}
