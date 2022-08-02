import React from "react";
import uniqid from "uniqid";
import "./Employment.css";

class Employment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employmentList: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({
        employmentList: this.state.employmentList.concat({
          employer: this.props.employer,
          startYear: this.props.startYear,
          endYear: this.props.endYear,
          role: this.props.role,
          id: uniqid(),
        }),
      });
    }
  }

  listToHTML(list) {
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
  }

  render() {
    return <div id="container">{this.listToHTML(this.props.prevEmp)}</div>;
  }
}

export default Employment;
