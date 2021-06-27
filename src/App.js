import React, { useState } from 'react';
import './static/css/app.css';
import CounterButton from './component/CounterButton';
import Resource from './component/Resource';
import ResourceEffect from './component/ResourceEffect';
import ThemeSwitch from './component/ThemeSwitch';
import InputName from './component/InputName';
import ThemeToggle from './component/ThemeToggle';
import ThemeCallback from './component/ThemeCallback';
import CounterReducer from './component/CounterReducer';
import ToDoList from './component/TodoReducer'

export const ThemeContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(previousTheme => !previousTheme)
  }

  return (
    <div className="background">
      <ThemeContext.Provider value = {darkTheme}>
        <button onClick = {toggleTheme} >Change Theme</button>
        <ThemeToggle />
      </ThemeContext.Provider>

      <InputName />
      <CounterButton />
      <Resource />
      <ResourceEffect />
      <ThemeSwitch />
      <ThemeCallback />
      <CounterReducer />
      <ToDoList />
    </div>
  );
}

export default App;
