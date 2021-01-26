import React from "react";
import "./style.css";
import EmployeeCard from "../EmplyeeCard";

function Results(props) {
  return (
    <div className="card">
      {props.results.map(result => (
        <div key={result.email} className="list-group-item">
          <EmployeeCard 
            firstname={result.name.first}
            lastname={result.name.last}
            phone={result.phone}
            email={result.email}
            image={result.picture.large}
            age={result.registered.age}
            housenumber={result.location.street.number} 
            streetname={result.location.street.name}
            city={result.location.city}
            zipcode={result.location.postcode}
            state={result.location.state} 
            nat={result.nat} 
            country={result.location.country}          
          />            
        </div>
      ))}
    </div>
  );
}

export default Results;