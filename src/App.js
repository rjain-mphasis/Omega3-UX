import './App.css';
import React from 'react';
import Sidebar from './sidebar/Sidebar'
import MainPage from './pages/MainPage'
function App() {
  return (
    <div className="App">
     <Sidebar/>
      <MainPage/>
    </div>
  );
}

export default App;
