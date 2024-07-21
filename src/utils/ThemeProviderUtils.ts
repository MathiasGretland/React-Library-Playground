import { useTheme } from "../components/theme-provider";

export function isDarkModeSet(): boolean {
  const { theme } = useTheme();
  return theme === "dark";
}
