import React from "react";

export default class DayNames extends React.Component {
  render() {
    return (
      <div className="row day-names">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day sat">Sat</span>
      </div>
    );
  }
}
