import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

function GenreList({onSelectGenre, selectedGenreId}: Props) {
    const {data, isLoading, error} = useGenres()

    if (error) return null
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id}>
                        <HStack paddingY='5px'>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontSize='large'
                                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                                whiteSpace='normal'
                                textAlign='left'
                                variant='link'
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default GenreList;