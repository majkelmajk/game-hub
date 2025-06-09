import {useInfiniteQuery} from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
}

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.order,
                search: gameQuery.search,
                page: pageParam
            }
        }),
        keepPreviousData: true,
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? (allPages.length + 1) : undefined
        }
    })
}

export default useGames;