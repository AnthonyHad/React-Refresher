import { useEffect, useState } from "react";

// Custom hooks need to start with use and react enforces hook rules.
// Usage of hook in different components will not share state.

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);
  // You can expose state updating functions as well.
  return { isFetching, error, data, setData };
}
