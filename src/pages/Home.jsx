import { Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import SearchTable from '../components/SearchTable';

const Home = () => {
  const { propertyData } = useSelector(state => state.table);
  return (
    <Stack height={'100%'} width={'100%'}>
      <Header />
      <Stack
        margin={'0px !important'}
        width={'100%'}
        height={'auto'}
        direction={'row'}
      >
        <Stack width={'20%'} height={'100%'}>
          <SideBar />
        </Stack>
        <Stack width={'70%'}>
          <SearchTable />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
