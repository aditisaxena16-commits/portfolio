import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skills/Skills.jsx'
import User from './components/Portfolio/Portfolio.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import {Route} from 'react-router-dom'
import Education from './components/Education/Education.jsx'
import Project from './components/Projects/Project.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
/* import Github, { githubLoader } from './components/Projects/Project.jsx'
 */ /* const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
    {
      path : '',
      element: <Home/>
    },
    {
      path : "about",
      element : <About/>
    },
    {
      path : "contact",
      element : <Contact/>
    },
     {
      path : "user/:userID",
      element : <User/>
    }
  ]

  }
 ])
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<Portfolio/>}>
      {/* <Route path ="" element ={<Home/>}/>
      <Route path ="skills" element ={<Skills/>}/>
      <Route path ="education" element ={<Education/>}/>
      <Route path ="contact" element ={<Contact/>}/>
      <Route path ="project" element ={<Project/>}>

       <Route path =""/>
      </Route>
      <Route path ="user/:userID" element ={<User/>}/> */}
      {/* <Route path ="github"
      loader = {githubLoader}
      element ={<Github/>}/>  */}

    </Route>
  )
)
createRoot(document.getElementById('root')).render( 
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
