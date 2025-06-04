import {ReactNode} from 'react';
import {Box} from "@chakra-ui/react";

interface Prop {
    children: ReactNode
}

const GameCardContainer = ({children}: Prop) => {
    return (
        <Box borderRadius={10} overflow={"hidden"} width='300px'>
            {children}
        </Box>
    );
};

export default GameCardContainer;