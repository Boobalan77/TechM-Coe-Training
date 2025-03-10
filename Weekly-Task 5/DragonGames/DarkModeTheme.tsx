import { HStack, space, Switch, useColorMode } from "@chakra-ui/react";

function DarkModeTheme(){
    const {colorMode, toggleColorMode} = useColorMode();    
    return (
        <HStack >  
            <Switch  colorScheme="teal" onChange={toggleColorMode} isChecked={colorMode=="dark"}>Theme</Switch>
        </HStack>
    )

}
export default DarkModeTheme;