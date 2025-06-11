import React from 'react';
import useScreenshots from "../hooks/useScreenshots";
import {Image, SimpleGrid} from "@chakra-ui/react";
import Screenshot from "../entities/Screenshot";

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId)

    if (isLoading) return null
    if (error) throw error

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            { data?.results?.map((screenshot: Screenshot) => (
                <Image src={screenshot.image} key={screenshot.id} />
            ))}
        </SimpleGrid>
    )
};

export default GameScreenshots;