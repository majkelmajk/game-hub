import React from 'react';
import {Badge} from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

    return (
        <div>
            <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color}>{score}</Badge>
        </div>
    );
};

export default CriticScore;