import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}: Props) {
    const {data, loading, error} = useGenres()

    if (error) return null
    if (loading) return <Spinner/>

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id}>
                    <HStack paddingY='5px'>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            fontSize='large'
                            variant='link'
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;