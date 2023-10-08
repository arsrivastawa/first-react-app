import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const HeadingAnime = () => {
  const data = 'Welcome to The To-Do App';
  const [text, setText] = useState(data);
  let idx = 1;
  function writeText() {
    setText(data.slice(0, idx) + '|');
    idx++;
    if (idx > data.length) {
      idx = data.length;
      setTimeout(ommitText, 2000);
    } else {
      setTimeout(writeText, 120);
    }
  }
  function ommitText() {
    setText(data.slice(0, idx) + '|');
    idx--;
    if (idx < 0) {
      idx = 1;
      setTimeout(writeText, 2000);
    } else {
      setTimeout(ommitText, 120);
    }
  }
  // useEffect(() => {
  //   writeText();
  // }, []);

  return (
    <Box
      className="Roboto SearchAnimation"
      fontSize={['18', '30']}
      textColor={'#06375d'}
      _dark={{ textColor: '#77cff5' }}
    >
      {text}
    </Box>
  );
};

export default HeadingAnime;
