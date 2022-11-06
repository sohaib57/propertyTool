import {
  Stack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Heading,
  Checkbox,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SearchTable = () => {
  const [check, setCheckId] = useState();
  const [rowId, setRowId] = useState();
  const { filteredPropertyData } = useSelector(state => state.table);

  const checkBoxHandler = (e, id) => {
    setCheckId(e.target.checked);
    setRowId(id);
  };

  const payload = {
    selectState: check,
    tableRowId: rowId,
  };

  

  return (
    <Stack py={'20px'}>
      <Heading size={'sm'}>Search results</Heading>
      <TableContainer>
        <Table variant={'striped'} size="md">
          <Thead>
            <Tr bg={'#e6e6e6'}>
              <Th>
                <CheckIcon />
              </Th>
              <Th>Address</Th>
              <Th>Postcode</Th>
              <Th>Property type</Th>
              <Th>Number of rooms</Th>
              <Th>Floor area</Th>
            </Tr>
          </Thead>
          <Tbody bg={'#f4f5f9'}>
            {filteredPropertyData.map(row => {
              return (
                <Tr key={row.id}>
                  <Td>
                    <Checkbox
                      onChange={e => checkBoxHandler(e, row.id)}
                    ></Checkbox>
                  </Td>
                  <Td>{row.address}</Td>
                  <Td>{row.postcode}</Td>
                  <Td>{row.type}</Td>
                  <Td>{row.numberofrooms}</Td>
                  <Td>{row.floorarea}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SearchTable;
