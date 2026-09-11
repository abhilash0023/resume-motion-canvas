import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const previousTitle = document.title;
    document.title = "Page Not Found | Abhilash K";

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      const previous = el?.getAttribute(attr) ?? null;
      el?.setAttribute(attr, value);
      return () => {
        if (el && previous !== null) el.setAttribute(attr, previous);
      };
    };

    const restore = [
      setMeta('meta[name="description"]', "content", "This page does not exist. Head back to the Abhilash K portfolio home page."),
      setMeta('meta[property="og:title"]', "content", "Page Not Found | Abhilash K"),
      setMeta('meta[property="og:description"]', "content", "This page does not exist. Head back to the Abhilash K portfolio home page."),
    ];

    return () => {
      document.title = previousTitle;
      restore.forEach((fn) => fn());
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
