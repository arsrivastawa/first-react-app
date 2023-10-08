import task, { days, month } from './data';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

import TaskFormat from './TaskFormat';
/* const strikingStyle = {
  bgColor: 'blue.900',
  w: '100%',
  h: '10%',
  content: '""',
  pos: 'absolute',
  top: ['40%', '55%'],
  animationName: 'StrikeThrough',
  animationDuration: '1s',
  animationIterationCount: '1',
  animationTimingFunction: 'ease',
}; */
const Tasks = () => {
  const [taskList, setTaskList] = useState(task);
  function SearchTask(id) {
    let searchedTask = taskList.find(val => {
      return val.id === id;
    });
    console.log(typeof id);
    console.log('Ha ye Raha', searchedTask);
  }
  function AddTask(taskFromForm) {
    setTaskList([...taskList, taskFromForm]);
  }
  return (
    <>
      <Box
        _light={{ bgColor: 'blue.200' }}
        _dark={{ textColor: 'blue.200', bgColor: 'blue.900' }}
        w={'full'}
        h={'fit-content'}
        direction={['column', 'row']}
        textColor={'blue.900'}
        p={'4'}
      >
        <Box mt={'10'}>
          {task.map(currTask => {
            return (
              <TaskFormat
                onHit={SearchTask}
                taskKey={currTask.id}
                task={{ ...currTask }}
                days={days}
                month={month}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Tasks;
