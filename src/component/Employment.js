import React, { useEffect, useState } from "react";
import "./Employment.css";

const Employment = (props) => {
  const [employmentList, setEmploymentList] = useState([]);

  useEffect(() => {
    setEmploymentList(employmentList =>
      employmentList.concat([
        {
          employer: props.prevEmp.employer,
          startYear: props.prevEmp.startYear,
          endYear: props.prevEmp.endYear,
          role: props.prevEmp.role,
          key: props.prevEmp.key,
        },
      ]).filter(emp => emp.employer !== undefined)
    );
  }, [props]);

  const listToHTML = (list) => {
    return list.map((ele) => {
      return (
        <div className="employment">
          <p>Employer: {ele.employer}</p>
          <p>Start Year: {ele.startYear}</p>
          <p>End Year: {ele.endYear}</p>
          <p>Role: {ele.role}</p>
        </div>
      );
    });
  };

  return <div id="container">{listToHTML(employmentList)}</div>;
};

export default Employment;
