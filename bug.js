```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: the function is defined but not invoked
    const intervalId = setInterval(incrementCount);
    return () => clearInterval(intervalId);
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```