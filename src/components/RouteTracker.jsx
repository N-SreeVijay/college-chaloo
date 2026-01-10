import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/tracker";

function RouteTracker() {
  const location = useLocation();

  const prevPathRef = useRef(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const currentPath = location.pathname;

    // 🔒 Prevent double-fire in React StrictMode (DEV)
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;

      trackEvent({
        type: "page_land",
        current_page: currentPath,
      });

      prevPathRef.current = currentPath;
      return;
    }

    const previousPath = prevPathRef.current;

    if (previousPath !== currentPath) {
      trackEvent({
        type: "page_navigation",
        from_page: previousPath,
        to_page: currentPath,
        current_page: currentPath,
      });

      prevPathRef.current = currentPath;
    }
  }, [location.pathname]);

  return null;
}

export default RouteTracker;
