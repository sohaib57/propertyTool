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

const SelectedPropertytable = () => {
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
            <Tr>
              <Td borderBottom={'2px solid black'}>data</Td>
              <Td borderBottom={'2px solid black'}>data</Td>
              <Td borderBottom={'2px solid black'}>data</Td>
              <Td borderBottom={'2px solid black'}>data</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SelectedPropertytable;
