import { useLocation } from "react-router-dom";

const BlogHandyIframe = () => {
  const location = useLocation();

  return (
    <iframe
      title="BlogHandy"
      src={`/bloghandy.html${location.search}`}
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default BlogHandyIframe;
