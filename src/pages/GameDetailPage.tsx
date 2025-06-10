import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data, error, isLoading} = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error) throw error

    const game = data!

    return (
        <>
            <Heading>{ game.name }</Heading>
            <ExpandableText>{ game.description_raw }</ExpandableText>
        </>
    )
}

export default GameDetailPage;