import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function SearchForm(props) { 
    
  const style={ width: "100%", height: "auto",overflow: "hidden" };
  return (
    
    <form className="search" >
      <div className="form-group" >
      <Row>       
        <Col size="md-9">
        <label htmlFor="employee">Search by Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"          
          type="text"
          className="form-control"
          placeholder="Enter Name to Search"
          id="employee"
        />
        </Col>
        <Col size="md-3">
          <div className="sort">
              <label htmlFor="sortby">Sort by:</label>     
              <select id="sortOptions" onChange={props.sortBy} className="form-control">          
                <option value="First Name">First Name</option>
                <option value="Last Name">Last Name</option>
                <option value="city">City</option> 
                <option value="Years">years</option>      
              </select>    
          </div> 
        </Col>
        
      </Row>   
      </div>  
    </form>
    
  );
}

export default SearchForm;