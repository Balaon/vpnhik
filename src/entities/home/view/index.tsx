import { useState } from 'react';

export const View = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>{count}</h1>
      <h4>
        Описание чего-то Описание чего-тоОписание чего-то Описание чего-то Описание чего-тоОписание
        чего-тоОписание чего-тоОписание чего-тоОписание чего-то
      </h4>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        {' '}
        count + 1
      </button>
    </>
  );
};
