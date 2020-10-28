import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function About(props){
    return(
        <div>
        
            <Hero title={props.title} />

            <Content>
        <p>Hello, my name is Allison Barnard. I am a full stack web developer who just graduated from Case Western Reserve's Full Stack Coding Boot Camp.</p>
        <p>I have experience with ReactJS, mySQL, MongoDB, HTML, CSS, JS, JQuery, Express, Bootstrap, JSON, APIs, Handlebars and AJAX. </p>
        <p>My dream is to one day start my own business building websites.</p>
        <p>When I'm not learning code or building applications, you can find me reading, traveling, hiking, or running.</p>
        <a className='LinkedIn' href="https://www.linkedin.com/in/allison-barnard-bb44a7100/"> LinkedIn </a>
        <a className='Github 'href="https://github.com/allisonbarnard07"> Github </a>
        <a className='Resume' href="https://docs.google.com/document/d/11146FOBozArXkyonDy77DLRKj66uydntyl5UStvGXsE/edit"> Resume </a>
        
        </Content>
        </div>
    );

}

export default About;