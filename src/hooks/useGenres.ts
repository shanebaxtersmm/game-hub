import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchGenresResponse>("/games", { signal: controller.signal })
            .then(({ data }) => {
                setGenre(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;