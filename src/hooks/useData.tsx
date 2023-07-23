import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const UseData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(
    () => {
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          if (err.name === "AbortError") return; // Handle the AbortError here
          setErrors(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, errors, loading };
};

export default UseData;
