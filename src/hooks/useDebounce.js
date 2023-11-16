import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [deboundedValue, setDeboundedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboundedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return deboundedValue;
};
