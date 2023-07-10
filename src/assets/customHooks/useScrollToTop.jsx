import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ScrollToTop() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
