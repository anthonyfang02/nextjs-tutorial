'use client';
import { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>Client Component</h1>
      <p className='text-2xl'>
        This is an example of a client component where we use React hook
        useState
      </p>
      <h6 className='text-5xl my-7 font-bold'>{count}</h6>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button className='btn btn-error ml-3' onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};
export default ClientPage;
