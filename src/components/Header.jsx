import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiDownArrow, BiMenuAltLeft, BiSearch } from 'react-icons/bi';
import HeadingAnime from './HeadingAnime';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
const Header = () => {
  const [state, setState] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      zIndex={10}
      pos={'fixed'}
      w={'full'}
      display={'flex'}
      p={'0'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      style={{ backdropFilter: 'blur(6px)' }}
      // _light={{ bgColor: 'blue.200' }}
      borderBottom={'1px solid grey'}
      boxShadow={'0px 4px 4px #00000047'}
      // mt={'-40px'}
    >
      <Button variant={'ghost'} onClick={isOpen ? onclose : onOpen}>
        <BiMenuAltLeft size={'22'} />
      </Button>
      {state ? <HeadingAnime /> : <SearchBar />}
      <Box display={'flex'} alignItems={'center'} ml={'2'}>
        <Button p={'0'} variant={'ghost'}>
          <BiSearch size={'22'} onClick={() => setState(!state)} />
        </Button>
        <ColorModeSwitcher />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent bgColor={'blue.200'} _dark={{ bgColor: 'blue.900' }}>
          <DrawerHeader className="Roboto" alignSelf={'center'}>
            To-Do List App
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Accordion
                allowToggle={true}
                w={'full'}
                border={'none'}
                outline={'none'}
              >
                <AccordionItem border={'none'}>
                  <AccordionButton justifyContent={'space-between'}>
                    <Button variant={'ghost'}>
                      <Link to={''}>All Tasks</Link>
                    </Button>
                    <BiDownArrow />
                  </AccordionButton>

                  <AccordionPanel
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'start'}
                  >
                    <Button variant={'ghost'}>
                      <Link to={'/default'}>Default</Link>
                    </Button>
                    <Button variant={'ghost'}>
                      <Link to={''}>Personal</Link>
                    </Button>
                    <Button variant={'ghost'}>
                      <Link to={''}>Shopping</Link>
                    </Button>
                    <Button variant={'ghost'}>
                      <Link to={''}>Wishlist</Link>
                    </Button>
                    <Button variant={'ghost'}>
                      <Link to={''}>Work</Link>
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={'none'}>
                  <AccordionButton>
                    <Button variant={'ghost'}>
                      <Link to={''}>Finished Tasks</Link>
                    </Button>
                  </AccordionButton>
                </AccordionItem>
              </Accordion>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
