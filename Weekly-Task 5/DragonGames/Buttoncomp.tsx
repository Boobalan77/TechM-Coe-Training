import { Button, Center, Stack } from "@chakra-ui/react";
import { IoGameController } from "react-icons/io5";

function Buttoncomp() {

  return ( 
    <Stack  alignContent="center" justify="center" marginTop={3} direction='row' spacing={4}>
      <Button  rightIcon={<IoGameController/>} colorScheme='teal' variant='solid'>
        Play Game
      </Button>
    </Stack>

  );
}
export default Buttoncomp;