import usePlatforms, {Platform} from "./usePlatforms";

const usePlatform = (platformId?: number): Platform | undefined => {
    const {data: platforms} = usePlatforms()
    return platforms?.results.find(p => p.id === platformId)
}

export default usePlatform