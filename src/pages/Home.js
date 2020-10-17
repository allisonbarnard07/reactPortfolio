import React from 'react';
import Carousel from '../components/Carousel'
import Hero from '../components/Hero';

function Home(props){
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} subSubText={props.subSubText} />
        <Carousel />
        </div>
    );

}

export default Home;