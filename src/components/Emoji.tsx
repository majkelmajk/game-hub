import React from 'react';
import {Text} from "@chakra-ui/react";

interface Props {
    rating: number
}

function Emoji({rating}: Props) {
    if (rating < 3) {
        return null
    }

    const emojiMap: { [key: number]: string } = {
        3: '🫤',
        4: '👍🏻',
        5: '🎯',
    }

    return (
        <Text fontSize='25px'>{emojiMap[rating]}</Text>
    );
}

export default Emoji;