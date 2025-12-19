import { useLocation } from "react-router-dom";

const BlogHandyIframe = () => {
  const location = useLocation();

  // Only render iframe on /articles
  if (location.pathname !== "/articles") return null;

  return (
    <iframe
      title="BlogHandy"
      src="/bloghandy.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default BlogHandyIframe;
