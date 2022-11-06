import { useEffect, useState } from 'react';
import { Button, Stack, Input, Heading } from '@chakra-ui/react';
import SelectedPropertytable from './SelectedPropertyTable';
import SearchTable from './SearchTable';
import { useDispatch } from 'react-redux';
import { searchByAddress } from '../redux/tablemodel/TableSlice';

const SearchBar = ({ propertyData }) => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByAddress(query));
  }, [query]);

  return (
    <Stack width={'100%'} px={'30px'} pt={'30px'}>
      <Stack>
        <Heading fontWeight={'bold'} fontSize={'md'}>
          Search
        </Heading>

        <Stack direction={'row'}>
          <Input
            placeholder="Address"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
          <Button bg={'#f6d744'} width={'120px'} size="md">
            Search
          </Button>
        </Stack>
      </Stack>

      {/* Selected Properties table */}

      <SelectedPropertytable />

      {/* Search table */}

      <SearchTable propertyData={propertyData} />
    </Stack>
  );
};

export default SearchBar;
