import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className='newParentElement'>
      <h1>Hello World!!</h1>
      <div></div>
    </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);