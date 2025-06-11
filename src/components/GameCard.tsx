import React from 'react';
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import placeholderImage from "../assets/game_placeholder.png"
import Emoji from "./Emoji";
import {Link} from "react-router-dom";
import Game from "../entities/Game";

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
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={'/game/' + game.slug}>
                        {game.name}
                    </Link>
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;