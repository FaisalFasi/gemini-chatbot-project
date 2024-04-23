"use client";
import { useState } from "react";
import { useEffect } from "react";

const Gemini = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/ask");

        if (!res.ok) {
          throw new Error(
            `Network response was not ok (status: ${res.status})`
          );
        }

        const data = await res.json();
        console.log("Response from API:", data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      Helllo::
      <h1>{data}</h1>
      {/* <p>{data.bio}</p> */}
    </div>
  );
};

export default Gemini;
