import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Select,
  Stack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiCheck, BiPlus } from 'react-icons/bi';

const TaskAdder = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [addedTask, setAddedTask] = useState({});
  return (
    <>
      <Button
        variant={'ghost'}
        bgColor={'#06375d'}
        h={'60px'}
        w={'60px'}
        borderRadius={'full'}
        pos={'fixed'}
        bottom={'10'}
        right={'10'}
        _dark={{ bgColor: 'blue.200', textColor: 'blue.900' }}
        _hover={{ opacity: '0.8' }}
        _active={{ opacity: '0.4' }}
        textColor={'blue.200'}
        onClick={isOpen ? onClose : onOpen}
      >
        <BiPlus size={'50px'} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerOverlay />
        <DrawerContent
          _light={{ bgColor: 'blue.200', textColor: 'blue.900' }}
          _dark={{ bgColor: 'blue.900', textColor: 'blue.200' }}
        >
          <DrawerHeader>
            Add a Task
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Stack direction={['column', 'row']}>
              <VStack w={'full'}>
                <Heading alignSelf={'self-start'} fontSize={'14'}>
                  What is to be done?
                </Heading>
                <Input
                  onChange={d => {
                    setAddedTask({ ...addedTask, title: d.target.value });
                  }}
                  placeholder="Enter Task Here"
                  borderColor={'blue.900'}
                  _hover={{ borderColor: 'blue.900' }}
                  focusBorderColor="none"
                  outline={'none'}
                  _dark={{
                    borderColor: 'blue.200',
                    _hover: '{borderColor:"blue.200"}',
                    focusBorderColor: 'none',
                    outline: 'none',
                  }}
                />
              </VStack>
              <VStack
                paddingInline={['none', '2']}
                borderInline={['none', '2px solid #06375d']}
                _dark={{ borderInline: ['none', '2px solid #77cff5'] }}
                w={'full'}
              >
                <Heading alignSelf={'self-start'} fontSize={'14'}>
                  Due Date
                </Heading>
                <Input
                  id="abcd"
                  onChange={d => {
                    console.log(d);
                    setAddedTask({ ...addedTask, dueDate: new Date(d) });
                  }}
                  onBlur={() => (document.querySelector('#abcd').type = 'text')}
                  onFocus={() =>
                    (document.querySelector('#abcd').type = 'date')
                  }
                  placeholder="Enter Date : DD/MM/YYYY"
                  borderColor={'blue.900'}
                  _hover={{ borderColor: 'blue.900' }}
                  focusBorderColor="none"
                  outline={'none'}
                  _dark={{
                    borderColor: 'blue.200',
                    _hover: '{borderColor:"blue.200"}',
                    focusBorderColor: 'none',
                    outline: 'none',
                  }}
                />
              </VStack>
              <VStack w={'full'}>
                <Heading alignSelf={'self-start'} fontSize={'14'}>
                  Add to List
                </Heading>
                <Select
                  onChange={d => {
                    setAddedTask({ ...addedTask, list: d });
                  }}
                  borderColor={'blue.900'}
                  _hover={{ borderColor: 'blue.900' }}
                  focusBorderColor="none"
                  outline={'none'}
                  _dark={{
                    borderColor: 'blue.200',
                    _hover: '{borderColor:"blue.200"}',
                    focusBorderColor: 'none',
                    outline: 'none',
                  }}
                >
                  <option selected>Default</option>
                  <option>Personal</option>
                  <option>Shopping</option>
                  <option>Wishlist</option>
                  <option>Work</option>
                </Select>
              </VStack>
            </Stack>
            <Stack pos={'relative'} w={'100%'} h={['80px', '90px']}>
              <Button
                variant={'ghost'}
                bgColor={'#06375d'}
                h={'60px'}
                w={'60px'}
                borderRadius={'full'}
                pos={'fixed'}
                bottom={'5'}
                right={'10'}
                _dark={{ bgColor: 'blue.200', textColor: 'blue.900' }}
                _hover={{ opacity: '0.8' }}
                _active={{ opacity: '0.4' }}
                textColor={'blue.200'}
                onClick={() => {
                  console.log(addedTask);
                  alert('Ha Ho Gaya Chaliye Jayiye');
                }}
              >
                <BiCheck size={'50px'} />
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TaskAdder;
