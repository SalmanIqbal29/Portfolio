"use client";
import Home1 from "./home/page";
import { DataContext } from "@/context/DataProvider";
import { useContext, useEffect } from "react";

export default function Home() {
  const { fontSizeAction, setFontSizeAction } = useContext(DataContext);

  useEffect(() => {
    if (fontSizeAction) {
      const elements = document.querySelectorAll(
        ".content, .aside, .nav a, .skill-percent, .title, i, span, h1, h2, h3, h4, h5, p, a"
      );
      elements.forEach((element) => {
        const currentFontSize = parseInt(
          window.getComputedStyle(element).fontSize
        );
        const newFontSize =
          fontSizeAction === "increase"
            ? currentFontSize + 2
            : currentFontSize - 2;
        element.style.fontSize = `${newFontSize}px`;
      });
      setFontSizeAction(null);
    }
  }, [fontSizeAction]);

  return (
    <>
      <Home1 />
    </>
  );
}
