import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <HStack padding='10px'>
            <Link to='/'><Image src={logo} boxSize='60px' objectFit='contain'/></Link>
            <SearchInput />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar;