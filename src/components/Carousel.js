import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from '../components/Card';
import woodDoor from '../assets/images/woodDoor.png';
import readMe from '../assets/images/readMe.gif';
import employeeManagementSystem from '../assets/images/employeeManagementSystem.gif';
import passwordGenerator from '../assets/images/passwordGenerator.png';
import websiteCleanup from '../assets/images/websiteCleanup.png';
import buildAndFlex from '../assets/images/buildAndFlex.png';

//import images from assets folder HERE "example: import picture from '../assets/images/picture.jpg"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Wood Door",
          subTitle: "Job search application.",
          imgSrc: woodDoor,
          link: "https://allisonbarnard07.github.io/Job-Search/",
          selected: false,
        },
        {
          id: 1,
          title: "Employee Management System",
          subTitle: "Employee Management System application.",
          imgSrc: employeeManagementSystem,
          link: "https://github.com/allisonbarnard07/employeeManagementSystem",
          selected: false,
        },
        {
          id: 2,
          title: "ReadMe Generator",
          subTitle: "ReadMe Generator application.",
          imgSrc: readMe,
          link: "https://github.com/allisonbarnard07/ReadMeGenerator",
          selected: false,
        },
        {
            id: 3,
            title: "Password Generator",
            subTitle: "Password Generator application.",
            imgSrc: passwordGenerator,
            link: "https://allisonbarnard07.github.io/password_generator",
            selected: false,
          },
          {
            id: 4,
            title: "Website Clean Up",
            subTitle: "A code clean up project.",
            imgSrc: websiteCleanup,
            link: "https://allisonbarnard07.github.io/website_cleanup/",
            selected: false,
          },
          {
            id: 5,
            title: "Build & Flex",
            subTitle: "A walking challenge application.",
            imgSrc: buildAndFlex,
            link: "https://buildandflex.herokuapp.com/",
            selected: false,
          }
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = { ...this.state.items };

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
        items
    });
  }

  makeItems = (items) => {
return items.map(item => {
    return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
})
  }

  render() {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;
