import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import {Box, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import React from "react";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data, error, isLoading} = useGame(slug!)

    if (isLoading) return <Spinner/>
    if (error) throw error

    const game = data!

    return (
        <>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
                <Box>
                    <Heading>{game.name}</Heading>
                    <ExpandableText>{game.description_raw}</ExpandableText>
                    <GameAttributes game={game}/>
                </Box>
                <Box>
                    <GameTrailer gameId={game.id}/>
                    <GameScreenshots gameId={game.id}/>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default GameDetailPage;