"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const themeOptions = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] as const;

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return (
    <fieldset
      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-raised p-1"
      disabled={!mounted}
    >
      <legend className="sr-only">Color theme</legend>
      {themeOptions.map((option) => (
        <label
          key={option.value}
          className="cursor-pointer"
          htmlFor={`theme-${option.value}`}
        >
          <input
            checked={mounted && theme === option.value}
            className="peer theme-choice-input sr-only"
            id={`theme-${option.value}`}
            name="color-theme"
            onChange={() => setTheme(option.value)}
            type="radio"
            value={option.value}
          />
          <span className="theme-choice-label inline-flex min-h-10 items-center justify-center rounded-full px-3 text-xs font-medium text-foreground transition-colors peer-checked:bg-primary peer-checked:text-primary-foreground">
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
