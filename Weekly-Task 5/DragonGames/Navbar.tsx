import { px } from 'framer-motion';
import DragonLogo2 from '../assets/DragonLogo2.png'
import { Center, Heading, HStack, Image } from '@chakra-ui/react'
import DarkModeTheme from './DarkModeTheme';
import { Fragment } from 'react/jsx-runtime';
function Navbar() {
    return (
        <Fragment>
         
       <HStack background={'#816b8b'} p={3} color={'white'} spacing={1} justifyContent="space-between" height={20} >    
      
       <HStack justifyContent={'space-between'}>
            <Image src={DragonLogo2} alt="Dragon Logo"  boxSize={'150px'} />
            <Heading size="xl">Dragon's Den</Heading>
           
        </HStack>
        
            <DarkModeTheme />
       </HStack>
        </Fragment>
    )
}
export default Navbar;