import { Box, Input } from '@chakra-ui/react';
import React from 'react';
const SearchBar = () => {
  return (
    <>
      <Box
        className="SearchAnimation"
        borderBottom={'2px solid rgb(6,55,93)'}
        _dark={{ borderBottom: '2px solid #77cff5' }}
      >
        <Input
          onChange={() => { }}
          fontSize={'18'}
          p={'2'}
          placeholder="Search your task"
          w={['215px', '500px']}
          outline={'none'}
          border={'none'}
          focusBorderColor="none"
        />
      </Box>
    </>
  );
};

export default SearchBar;
