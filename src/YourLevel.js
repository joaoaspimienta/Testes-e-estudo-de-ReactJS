import { useState } from 'react'

export default function YourLevel() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <h1>Your level is {level}</h1>
      <button onClick={() => setLevel(level + 1)}>
        Click here to increase your level
      </button>
    </>
  );
}
