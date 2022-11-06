import { Heading, Image, Stack } from '@chakra-ui/react';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <Stack margin={'0px !important'} width={'100%'} height={'100px'} backgroundColor={'#f4f5f9'}>
      <Stack >
        <Image border={'3px solid white'} position={'absolute'} left={'20px'} top={'20px'} width={'100px'} src={logo} />
      </Stack>
      <Heading fontSize={'24px'} paddingTop={'22px'} textAlign={'center'} >Property Search Tool</Heading>
    </Stack>
  );
};

export default Header;
