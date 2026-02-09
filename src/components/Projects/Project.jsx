import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import ProjectCard from '../ProjectCard/ProjectCard';

function Project() {
 

  return (
    <div id="Project">
      <HeaderComponent title="Project" />
        <ProjectCard 
          className="top-30"
          ProName="Terumo" 
          ProTitle="Terumo Europe Website" 
          ProDesc="This was my first Project as a UI developer. My team and I developed a live website for Terumo Europe. As a front-end developer, I worked on creating the Responsive website using Javascript, Bootstrap, HTML, CSS, LESS, and other necessary libraries. We developed a KIOSK for Terumo as well from skretch for which design was provided by customer on Zeplin Tool and we worked on the development."
        
        />
        <ProjectCard 
        className="top-45"
          ProName="Elanco" 
          ProTitle="Animal Health Application" 
          ProDesc="n this project, I worked as an Individual Contributor, where I transformed an existing application into a fully responsive interface using Bootstrap. I developed several pages from scratch, leveraging Bootstrap components such as Navbar and Accordions to enhance usability. I collaborated closely with the backend team during the integration phase, ensuring seamless connectivity between frontend and backend modules. Additionally, I implemented all on‑screen functionalities using JavaScript, delivering a smooth and interactive user experience."
        />
        <ProjectCard 
        className="top-40"
          ProName="Servier" 
          ProTitle="Veeva Vault and CRM Application" 
          ProDesc="In this project, I had the opportunity to collaborate with multiple clients across the APAC and EMEA regions. Our primary focus was on converting PowerPoint presentations into interactive web pages using HTML and CSS, while replicating animations through JavaScript and jQuery. I also contributed to the development of emailers, ensuring responsive and visually engaging designs. Once completed, these presentations and emailers were uploaded to Veeva Vault and seamlessly integrated with CRM applications, enabling Medical Representatives to effectively present data to stakeholders."
        />
         <ProjectCard 
        className="top-40"
          ProName="Bose" 
          ProTitle="Bose B2C Website" 
          ProDesc="In this project, I am working as an Individual Contributor and my responsibilities include supporting and resolving ongoing issues on the production site. One of the major tasks I handled was fixing the Product Detail Page (PDP), which previously displayed incorrect pricing and faulty calculations. I redeveloped the logics to correctly manage multiple variant prices, ensuring accuracy and reliability. Additionally, I addressed accessibility issues in the search component and delivered critical hotfixes, which helped the organization avoid significant compliance risks and potential fines."
   />
         <ProjectCard 
        className="top-100"
          ProName="Gigya" 
          ProTitle="Gigya Removal Analysis" 
          ProDesc="This was the analysis project. Since our B2C website was earlier using Gigya for user registration and login,  I was responsible for analyzing the impact on the frontend and identifying the necessary changes required to remove Gigya. I collaborated with cross-functional teams to understand the dependencies and implications of this change, ensuring a smooth transition while maintaining the integrity of the user experience. I analysed the end to end flow from UI to Microservices calls and back to UI along with MS developer of outr team and created semantic diagrams and presented to customer."
   />
          </div>
  )
}
export default Project
/* export const githubLoader = async() => {
const response = await fetch("https://api.github.com/users/hiteshchoudhary")
return response.json()
}
 */