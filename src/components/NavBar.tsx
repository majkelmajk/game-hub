import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
    onSearch: (search: string) => void;
}

function NavBar({onSearch}: SearchInputProps) {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar;