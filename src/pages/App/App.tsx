import { useState } from 'react';
import Header from './Header';
import Speakers from '../Speakers/Speakers';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={
      theme === "light" 
          ? "container-fluid light" 
          : "container-fluid dark"
    }>
      <Header theme={theme}/>
      <Speakers 
        theme={theme} 
        setTheme={setTheme} 
      />
    </div>
  );
}

export default App;
