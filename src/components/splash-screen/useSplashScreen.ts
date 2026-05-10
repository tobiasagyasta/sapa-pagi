"use client";

import { useEffect, useState } from "react";

const SPLASH_STORAGE_KEY = "sapa-pagi:splash-shown";
const SPLASH_VISIBLE_MS = 1250;

export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(SPLASH_STORAGE_KEY) === "true") {
      return;
    }

    window.sessionStorage.setItem(SPLASH_STORAGE_KEY, "true");
    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_VISIBLE_MS);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return isVisible;
}
