import './App.css'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' 
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'

function App() {

  return (
    <>

      <Header/>
      <Outlet/>
    </>
  )
}

export default App
