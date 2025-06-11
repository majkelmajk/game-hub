import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms"
import Platform from "../entities/Platform";
import ms from "ms";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
})

export default usePlatforms