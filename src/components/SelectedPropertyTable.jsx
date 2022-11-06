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
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const SelectedPropertytable = () => {
  const { selectedPropertyData } = useSelector(state => state.table);
  if (selectedPropertyData === undefined) {
    return;
  }

  return (
    <Stack pt={'20px'}>
      <Heading size={'sm'}>Selected Properties</Heading>
      <TableContainer>
        <Table variant={'striped'} size="md">
          <Thead>
            <Tr bg={'#e6e6e6'}>
              <Th>Address</Th>
              <Th>Postcode</Th>
              <Th>Number of rooms</Th>
              <Th>Floor area</Th>
            </Tr>
          </Thead>
          <Tbody bg={'#f4f5f9'}>
            {selectedPropertyData.map(selectedPropertyData => {
              return (
                <Tr>
                  <Td borderBottom={'2px solid black'}>
                    {selectedPropertyData?.address}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {selectedPropertyData?.postcode}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {selectedPropertyData?.numberofrooms}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {selectedPropertyData?.floorarea}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SelectedPropertytable;
