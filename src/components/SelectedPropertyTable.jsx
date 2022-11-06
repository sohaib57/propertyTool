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

  const extractedData = selectedPropertyData.filter(element => {
    return element !== undefined;
  });

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
            {extractedData.map(extractedData => {
              return (
                <Tr key={extractedData?.id}>
                  <Td borderBottom={'2px solid black'}>
                    {extractedData?.address}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {extractedData?.postcode}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {extractedData?.numberofrooms}
                  </Td>
                  <Td borderBottom={'2px solid black'}>
                    {extractedData?.floorarea}
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
