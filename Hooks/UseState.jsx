import {} from 'react-native'
import { useState } from 'react';


const useStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return {
    count,
    increment,
    decrement
  };
};

export default useStateExample;