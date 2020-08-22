import { useCallback, useLayoutEffect, useState } from "react";
import { useMedia } from "react-use";

type IThemeMode = "dark" | "light";

export const useThemeMode = () => {
  const isSystemDark = useMedia("(prefers-color-scheme: dark)");

  const getThemeMode = useCallback(() => {
    if (isSystemDark) {
      return "dark";
    } else {
      return "light";
    }
  }, [isSystemDark]);

  const [themeMode, setThemeMode] = useState<IThemeMode>(getThemeMode());

  useLayoutEffect(() => {
    const mode = getThemeMode();
    setThemeMode(mode);
  }, [getThemeMode, isSystemDark]);

  return themeMode;
};
