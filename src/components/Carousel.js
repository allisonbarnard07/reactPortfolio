import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from '../components/Card';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Wood Door",
          subTitle: "Job search application.",
          imgSrc: './assets/images/woodDoor.png',
          link: "https://allisonbarnard07.github.io/Job-Search/",
          selected: false,
        },
        {
          id: 1,
          title: "Employee Management System",
          subTitle: "Employee Management System application.",
          imgSrc: './assets/images/employeeManagementSystem.png',
          link: "https://github.com/allisonbarnard07/employeeManagementSystem",
          selected: false,
        },
        {
          id: 2,
          title: "ReadMe Generator",
          subTitle: "ReadMe Generator application.",
          imgSrc: './assets/images/readMe.png',
          link: "https://github.com/allisonbarnard07/ReadMeGenerator",
          selected: false,
        },
          {
            id: 3,
            title: "Website Clean Up",
            subTitle: "A code clean up project.",
            imgSrc: './assets/images/websiteCleanup.png',
            link: "https://allisonbarnard07.github.io/website_cleanup/",
            selected: false,
          },
          {
            id: 4,
            title: "Build & Flex",
            subTitle: "A walking challenge application.",
            imgSrc: './assets/images/buildAndFlex.png',
            link: "https://buildandflex.herokuapp.com/",
            selected: false,
          }
      ],
    };
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}


makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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
