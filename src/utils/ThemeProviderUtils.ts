import { useTheme } from "../components/theme-provider";

export function isDarkModeSet(): boolean {
  const { theme } = useTheme();

  const isSystemLightMode = window
    .matchMedia("(prefers-color-scheme: light)")
    .matches.valueOf();

  if (isSystemLightMode && theme === "system") {
    return false;
  } else if (isSystemLightMode && theme === "light") {
    return false;
  } else if (isSystemLightMode && theme === "dark") {
    return true;
  } else if (!isSystemLightMode && theme === "dark") {
    return true;
  } else if (!isSystemLightMode && theme === "system") {
    return true;
  } else {
    return false;
  }
}
