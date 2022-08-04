import React from "react";
import "./Personal.css";

const Personal = (props) => {
  return (
    <div className="personal">
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Location: {props.location}</p>
      <p>University: {props.uni}</p>
      <p>Degree: {props.degree}</p>
      <p>Graduation Year: {props.gradYear}</p>
    </div>
  );
};

export default Personal;
