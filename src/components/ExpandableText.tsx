import {useState} from "react";
import {Button, Text} from "@chakra-ui/react";

interface Props {
    children: string
}

const ExpandableText = ({children}: Props) => {
    const [expanded, setExpanded] = useState(false)
    const limit = 200

    if (!children) return null

    if (children.length <= limit)
        return <Text>{children}</Text>

    const summary = children.substring(0, limit)

    return (
        <>
            <Text>
                {expanded ? children : summary +'... '}
                <Button
                    onClick={() => setExpanded(!expanded)}
                    size='xs'
                    fontWeight='bold'
                    colorScheme='yellow'
                    marginLeft={1}
                >
                    {expanded ? 'Show less' : 'Show more'}
                </Button>
            </Text>
        </>
    )
}

export default ExpandableText