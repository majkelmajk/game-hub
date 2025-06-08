import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number
    name: string
    image_background: string
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000
})

export default useGenres