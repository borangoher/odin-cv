import React from "react";
import "./Personal.css"


class Personal extends React.Component {
    //eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal">
        <p>Name: {this.props.name}</p>
        <p>Surname: {this.props.surname}</p>
        <p>Location: {this.props.location}</p>
        <p>University: {this.props.uni}</p>
        <p>Degree: {this.props.degree}</p>
        <p>Graduation Year: {this.props.gradYear}</p>
      </div>
    );
  }
}

export default Personal;
