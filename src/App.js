import React from "react";
import uniqid from "uniqid";
import Personal from "./component/Personal";
import Employment from "./component/Employment";
import "./component/App.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      location: "",
      university: "",
      degree: "",
      gradYear: "",
      previousEmployment: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.parentElement.children[1].value,
      surname: e.target.parentElement.children[3].value,
      location: e.target.parentElement.children[5].value,
      university: e.target.parentElement.children[7].value,
      degree: e.target.parentElement.children[9].value,
      gradYear: e.target.parentElement.children[11].value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      previousEmployment: this.state.previousEmployment.concat([
        {
          employer: e.target.parentElement.children[1].value,
          startYear: e.target.parentElement.children[3].value,
          endYear: e.target.parentElement.children[5].value,
          role: e.target.parentElement.children[7].value,
          id: uniqid(),
        },
      ]),
    });
  };

  render() {
    return (
      <div id="content">
        <form onSubmit={this.pass} id="firstForm">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" onChange={this.handleChange}></input>
          <label htmlFor="surname">Surname</label>
          <input
            name="surname"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="location">Location</label>
          <input
            name="location"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="university">University</label>
          <input
            name="university"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="degree">Degree</label>
          <input name="degree" type="text" onChange={this.handleChange}></input>
          <label htmlFor="gradYear">Graduation Year</label>
          <input
            name="gradYear"
            type="text"
            onChange={this.handleChange}
          ></input>
        </form>
        <form id="secondForm">
          <label htmlFor="employer">Previous Employer</label>
          <input name="employer" type="text"></input>
          <label htmlFor="startYear">Start Year</label>
          <input name="startYear" type="text"></input>
          <label htmlFor="endYear">End Year</label>
          <input name="endYear" type="text"></input>
          <label htmlFor="role">Role</label>
          <input name="role" type="text"></input>
          <button onClick={this.handleAdd}>Add</button>
        </form>
        <Personal
          name={this.state.name}
          surname={this.state.surname}
          location={this.state.location}
          uni={this.state.university}
          degree={this.state.degree}
          gradYear={this.state.gradYear}
        />
        <Employment prevEmp={this.state.previousEmployment} id={uniqid()}/>
      </div>
    );
  }
}

export default App;
