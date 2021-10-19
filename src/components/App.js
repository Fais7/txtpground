import React, { useState } from 'react';
import Txtar from './Txtar';

const App = () => {
  let [mode, setMode] = useState('light');
  const toggleB = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      <div className={`container-fliud bg-${mode === 'light' ? 'dark' : 'light'}  `}>
        <Txtar heading="Enter the text to make it easy" mode={mode} toggleB={toggleB} />
      </div>
    </>
  )
}

export default App;
