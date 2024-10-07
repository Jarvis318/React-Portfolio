import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import  Navbar  from './components/navbar';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Container, Header, Grid, Segment, Button } from 'semantic-ui-react';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default App
