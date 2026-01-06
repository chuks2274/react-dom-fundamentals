import { useState } from "react";
import axios from "axios";


interface Cat {
  id: string;
  url: string;
}

const FetchDemo = () => {
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCat = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCat(res.data[0]); // API returns array with single cat object
    } catch (err) {
      setError("Failed to fetch cat image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fetch-container">
      <h2>Random Cat Generator</h2>

      <button className="btn" onClick={fetchCat}>
        {loading ? "Loading..." : "Get Random Cat"}
      </button>

      {error && <p className="error">{error}</p>}

      {cat && (
        <div className="cat-image-container">
          <img src={cat.url} alt="Random Cat" className="cat-image" />
        </div>
      )}
    </div>
  );
};

export default FetchDemo;
