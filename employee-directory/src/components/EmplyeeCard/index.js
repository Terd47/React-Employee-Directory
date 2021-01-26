import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function EmployeeCard (props) {
  const style={ width: "100%", height: "auto" };
  
  return (
    <div className="card" style={style}>
      <div className="card-header"><h3>{props.firstname} {props.lastname}</h3></div>
      <div className="card-body">
        <Row>
          <Col size="md-4">            
          <img alt="employee-photo" src={props.image} className="img-fluid" />      
          </Col>   
          <Col size="md-4">
            <span><h5>Address: </h5> {props.housenumber} {props.streetname}, {props.city}, {props.state}</span> 
            <span><h5>ZipCode: </h5> {props.zipcode}</span>
            <span><h5>State: </h5>{props.state}</span>         
            <span><h5>Country: </h5>{props.country}</span>
          </Col>
          <Col size="md-4">
            <span><h5>Email: </h5>{props.email}</span>            
            <span><h5>Phone: </h5>{props.phone}</span> 
            <span><h5>Nationality: </h5>{props.nat}</span>
            <span><h5>Time with Company: </h5>{props.age} years</span>
          </Col>
        </Row>        
      </div>      
    </div>
  );
}

export default EmployeeCard;