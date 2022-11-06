import React from 'react';
import {
  Button,
  Stack,
  Text,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tfoot,
  Td,
  Tbody,
  Heading,
  Checkbox,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
const SearchTable = () => {
  return (
    <Stack width={'100%'} px={'30px'} pt={'30px'}>
      <Stack>
        <Heading fontWeight={'bold'} fontSize={'md'}>
          {' '}
          Search{' '}
        </Heading>

        <Stack direction={'row'}>
          <Input placeholder="Address" />
          <Button bg={'#f6d744'} width={'120px'} size="md">
            Search
          </Button>
        </Stack>
      </Stack>

      {/* Selected Properties table */}

      <Stack pt={'20px'}>
        <Heading size={'sm'}>Search Properties</Heading>
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
                <Td borderBottom={'2px solid black'}>inches</Td>
                <Td borderBottom={'2px solid black'}>inches</Td>
                <Td borderBottom={'2px solid black'}>inches</Td>
                <Td borderBottom={'2px solid black'}>inches</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>

      {/* Search table */}

      <Stack pt={'20px'}>
        <Heading size={'sm'}>Search Properties</Heading>
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
              <Tr>
                <Td>
                  <Checkbox defaultChecked></Checkbox>
                </Td>
                <Td >inches</Td>
                <Td >inches</Td>
                <Td >inches</Td>
                <Td >inches</Td>
                <Td >inches</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default SearchTable;
