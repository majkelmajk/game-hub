import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

function ColorModeSwitch() {
    const {toggleColorMode, colorMode} = useColorMode()

    return (
        <HStack>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            ></Switch>
            <Text whiteSpace='nowrap'>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch