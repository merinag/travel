import React, { useState, useEffect } from 'react';

function AutoCounter({ name = 'Counter', maxCount = 10, intervalMs = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < maxCount) {
        setCount(count + 1);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [count, maxCount, intervalMs]);

  return (
    <div className='counter'>
      <p style={{color:'white',fontWeight:'bold'}}> {count}+
      <br/>{name}</p>
     
    </div>
  );
}
export default AutoCounter