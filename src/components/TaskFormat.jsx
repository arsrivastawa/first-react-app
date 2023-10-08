import { Box, Checkbox, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
const darkClr = '#06375d';
const lightClr = '#77cff5';

const TaskFormat = ({ task, days, month, taskKey, onHit }) => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <Box
        key={taskKey}
        _light={{
          bgColor: 'blue.200',
          textColor: 'blue.900',
          _hover: { boxShadow: `0px 0px 10px ${darkClr}`, border: 'none' },
          border: `1px solid ${darkClr}`,
        }}
        _dark={{
          bgColor: 'blue.900',
          textColor: 'blue.200',
          _hover: { boxShadow: '0px 0px 10px #77cff5', border: 'none' },
          border: `1px solid ${lightClr}`,
        }}
        w={'full'}
        h={'fit-content'}
        p={'5px'}
        my={'5'}
        borderRadius={'15px'}
      >
        <HStack alignContent={'center'}>
          <Checkbox
            id="taskCheckbox"
            size={'lg'}
            px={'4'}
            my={'auto'}
            zIndex={0}
            isChecked={check}
            onChange={() => {
              setCheck(!check);
              onHit(taskKey);
            }}
          />
          {/* width: 100%;
    height: 3px;
    content: "";
    position: absolute;
    top: 55%;
    animation-name: StrikeThrough;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease; */}

          <VStack alignItems={'flex-start'} py={'2'} justifyContent={'center'}>
            <Heading
              pos={'relative'}
              overflow={'hidden'}
              fontSize={'20'}
              // style={{&bfore}}
              _before={{ ...task.style }}
              _dark={{ _before: { bgColor: 'blue.200' } }}
            >
              {check ? <s>{task.title}</s> : task.title}
            </Heading>

            <Text>
              {check ? <s>Due Date:</s> : 'Due Date'}
              {days[task.dueDate.getDay()]}, {task.dueDate.getDate()}-
              {month[task.dueDate.getMonth()]}-{task.dueDate.getFullYear()}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
export default TaskFormat;
