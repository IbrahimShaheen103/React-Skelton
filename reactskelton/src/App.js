import React from 'react';
import Articles from './comp/Articles';
import User from './comp/Users';



function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className='content'>
          <Articles/>
          <User/>
      </div>
    </div>
  );
}

export default App;