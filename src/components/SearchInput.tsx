import React, {useRef} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import {useNavigate} from "react-router-dom";

function SearchInput() {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (ref.current) {
                setSearchText(ref.current.value)
                navigate('/')
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    );
}

export default SearchInput;