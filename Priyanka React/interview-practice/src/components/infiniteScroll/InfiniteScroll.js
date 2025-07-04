import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  const fetchItems = async (pageNum) => {
    const newItems = Array.from({ length: 10 }, (_, i) => `Item ${i + 1 + (pageNum - 1) * 10}`);
    setItems((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <div style={{ padding: "20px", border: "1px solid #ccc" }} key={index}>
          {item}
        </div>
      ))}
      <div ref={loader} style={{ height: "100px" }}>
        Loading...
      </div>
    </div>
  );
};

export default InfiniteScroll;
