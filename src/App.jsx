import { useState } from 'react';
import './App.css';
import Profile from './portfolioPage';
import Welcome from './welcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
    </>
  )
}

export default App
