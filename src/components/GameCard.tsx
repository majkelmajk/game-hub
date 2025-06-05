import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import placeholderImage from "../assets/game_placeholder.png"

interface GameCardProps {
    game: Game
}

function GameCard({game}: GameCardProps) {
    const image = game.background_image
        ? getCroppedImageUrl(game.background_image)
        : placeholderImage;
    return (
        <Card>
            <Image src={image}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;