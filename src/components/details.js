import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class AccordionHeader extends React.Component {
  render() {
    console.log('accordheader',this.props)  
    return (
      <div className="card-header">
         <h5 className="card-header--title">
          <Row>
            <Col>
            <Badge variant="info">{this.props.data.name}</Badge>
            </Col>
            </Row>
            <Row>
            <Col>
            <Badge variant="info">{this.props.data.reminder_formatted_date}</Badge>
            </Col>
            </Row>
            
           
        </h5>
      </div>
    );
  }
}

class AccordionBody extends React.Component {
  render() {
    const regex = /(<([^>]+)>)/ig;
    const result = this.props.data.notes.replace(regex, ''); 
    return (
      <div className="card-body">
        <Badge variant="dark">Notes</Badge>
        <p>{result}</p>
      </div>
    );
  }
}

export default class details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props,'detailsuper');
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    console.log("details", this.state, this.props.location.query);
    if( this.props.location.query.edu_activities !== 'undefined'){
      return (
        <div>
          <header className="app-header"></header>
          <div className="app-card-list" id="app-card-list">
          {Object.keys(this.props.location.query.edu_activities).map((key) => (
              <Steps key={key} index={key} details={this.props.location.query.edu_activities[key]} />
            ))}
          </div>
        </div>
      );
    }else{
      return(
        <div></div>
      )
    }
   
  }
}
class Steps extends React.Component {
  render() {
    console.log('accordionprops',this.props)
    const {index} = this.props
    return (
      <div>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                <AccordionHeader data={this.props.details.data} />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <AccordionBody data={this.props.details.data} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    );
  }
}
