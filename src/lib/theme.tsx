export type ThemeKey = "gcc" | "qatar" | "uae" | "oman" | "saudi";

export const themeByPath = (pathname: string): ThemeKey => {
  if (pathname.startsWith("/qatar")) return "qatar";
  if (pathname.startsWith("/uae")) return "uae";
  if (pathname.startsWith("/oman")) return "oman";
  if (pathname.startsWith("/saudi")) return "saudi";
  return "gcc";
};