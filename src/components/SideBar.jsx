import { Heading, Stack, Text } from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Stack width={'100%'} px={'40px'} height={'100%'}>
      <Stack alignContent={'end'} pt={'30px'}>
        <Heading fontSize={'md'}>Property types</Heading>
        <Stack height={'200px'} bg={'#f4f5f9'} p={'3'}>
          <Text cursor={'pointer'}>All</Text>
          <Text cursor={'pointer'}>Flat</Text>
          <Text cursor={'pointer'}>Terraced house</Text>
          <Text cursor={'pointer'}>Semi-detached</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideBar;
