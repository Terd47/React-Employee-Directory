import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import Title from '../components/Title';


class Employees extends Component {
  state = {
    search: "",
    sortby: "",    
    results: [], 
    filterResults: [],   
    error: ""
  };

  // get all employees
  componentDidMount() {
    API.getRandomEmployee()
      .then(res =>{
        console.log(res.data.results);
        this.setState({ results: res.data.results });
        this.setState({ filterResults: res.data.results});
        console.log(this.state.results);
      } )
      .catch(err => console.log(err));
  }

  //run search on change
  handleInputChange = event => {       
    console.log(this.state.results); 
    const listEmployees = this.state.results.filter(res => (res.name.first.toLowerCase() + " " + res.name.last.toLowerCase()).indexOf(event.target.value.toLowerCase()) >= 0);   
    this.setState({ filterResults: listEmployees });
  };

  // sort by user choice
  sortBy = event => {
    console.log(event.target.value.toLowerCase());
    const sortOptionValue = event.target.value.toLowerCase();
    if (sortOptionValue === 'first name'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.name.first > b.name.first) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
    if (sortOptionValue === 'last name'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
    if (sortOptionValue === 'years'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.registered.age > b.registered.age) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
    if (sortOptionValue === 'city'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.registered.age > b.registered.age) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
   
  };

  render() {
    return (

      <div>
      <Title  >
        <h1>Easy Employee Lookup</h1>        
      </Title>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">        
            <div>
              <Container >             
                <SearchForm                  
                  handleInputChange={this.handleInputChange}
                  sortBy={this.sortBy}
                />
                <Results results={this.state.filterResults} />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>    
      </div>
    );
  }
}

export default Employees;