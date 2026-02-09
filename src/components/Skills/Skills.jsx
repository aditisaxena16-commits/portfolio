import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import Skillcard from '../SkillCard/Skillcard';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import imageBootstrap from '../../assets/bootstrap.svg'
import imageCSS from '../../assets/css.svg' 
import imageTailwind from '../../assets/tailwind.svg'
 import imageGit from '../../assets/git.svg'
 import imageJavascript from '../../assets/javascript.svg'
 import imageReact from '../../assets/reactjs.svg'
 import imageHTML from '../../assets/html.svg'
 
 
export default function Skills() {
    const skills = [
        {imgsrc: imageBootstrap , text : "Bootstrap" },
        {imgsrc: imageCSS , text : "CSS" },
        {imgsrc: imageTailwind , text : "Tailwind" },
        {imgsrc: imageGit , text : "GIT" },
        {imgsrc: imageJavascript , text : "Javascript" },
        {imgsrc: imageHTML , text : "HTML" },
        {imgsrc: imageReact, text : "React" },
        {imgsrc: imageCSS , text : "LESS" },
        {imgsrc: imageCSS , text : "SASS" }

    ];
    return (

        <div>
            <HeaderComponent title="Skills" />
            <div id="Skills" className="bg-transparent p-8">
                 <Marquee speed={60} pauseOnHover gradient={false}>
                    {skills.map((skill ,index)=>(
                     <Skillcard text={skill.text} imgsrc={skill.imgsrc}/>

                    )
                )}
                    
                     </Marquee> 
            </div>
        </div>
    );
}
