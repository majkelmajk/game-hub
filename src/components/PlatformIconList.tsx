import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../hooks/useGames";
import {HStack, Icon} from "@chakra-ui/react";

interface PlatformIconListProps {
    platforms: Platform[];
}

function PlatformIconList({platforms}: PlatformIconListProps) {
    const iconMap: {[key: string]: any} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) =>
                <Icon as={iconMap[platform.slug]} key={platform.slug} color={'grey'}/>
            )}
        </HStack>
    );
}

export default PlatformIconList;