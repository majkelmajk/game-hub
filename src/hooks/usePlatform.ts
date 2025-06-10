import usePlatforms from "./usePlatforms";
import {Platform} from "../entities/Platform";

const usePlatform = (platformId?: number): Platform | undefined => {
    const {data: platforms} = usePlatforms()
    return platforms?.results.find(p => p.id === platformId)
}

export default usePlatform