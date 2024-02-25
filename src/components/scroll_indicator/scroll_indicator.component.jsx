import { useEffect } from "react";
import { useState } from "react";
import "./scroll_indicator.styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollStatus, setScrollStatus] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  function handleScrollStatus() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollStatus((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollStatus);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="scroll-indicator">
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-indicator">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollStatus}%` }}
          ></div>
        </div>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem) => <p>{dataItem.title}</p>)
            : null}
        </div>
      </div>
    </div>
  );
}
