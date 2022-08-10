import { useEffect } from "react";

export const useScript = (url, onload) => {
  useEffect(() => {
    let script = document.createElement("script");

    script.src = url;
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, [url, onload]);
};