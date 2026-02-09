import React from 'react'
import { useParams } from 'react-router-dom'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'
import Project from '../Projects/Project'
import Home from '../Home/Home'
import Header from '../header/header'
import Roles from '../Roles/Roles'

/* function User() {
888
    const {userID} = useParams()
  return (
    <div>
      <h1>User: {userID}</h1>
    </div>
  )
}

export default User */

function Portfolio() {
  return (
    <div>
       <section className="sticky top-0 z-50" id="Header"><Header/></section>

      <section id="Home"><Home/></section>

      <section id="Skills"><Skills/></section>
      <section id="Education"><Education/></section>
            <section id="Roles"><Roles/></section>

       <section id="Project"><Project/></section>
      <section id="Contact"><Contact/></section>
     
    </div>
  )
}

export default Portfolio

