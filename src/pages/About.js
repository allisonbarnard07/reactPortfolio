import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Photo from '../assets/images/Photo.png'

function About(props){
    return(
        <div>
            <img className='photo' src={Photo}></img>
            <Hero title={props.title} />

            <Content>
        <p>Hello, my name is Allison Barnard. I am a full stack web developer who just graduated from Case Western Reserve's Full Stack Coding Boot Camp.</p>
        <p>I have experience with ReactJS, mySQL, MongoDB, HTML, CSS, JS, JQuery, Express, Bootstrap, JSON, APIs, and AJAX. </p>
        <p>My dream is to one day start my own business building websites.</p>
        <p>When I'm not learning code or building applications, you can find me reading, traveling, hiking, or running.</p>
        </Content>
        </div>
    );

}

export default About;