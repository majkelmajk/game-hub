import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = (useStaticData?: boolean) => {
    if (useStaticData === true) {
        return {data: genres, loading: false, error: null}
    }
    return useData<Genre>('/genres')
}

export default useGenres