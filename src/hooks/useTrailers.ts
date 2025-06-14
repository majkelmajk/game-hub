import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms'
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('24h')
    })
}

export default useTrailers