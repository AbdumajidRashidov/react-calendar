import React from "react";
import Week from "./Week";
import DayNames from "./DayNames";
import moment from "moment/moment";

moment.defaultFormat = "MM.YYYY";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment("01.2022", moment.defaultFormat),
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          return {
            month: moment(data.date, moment.defaultFormat),
            green: data.green,
            yellow: data.yellow,
            grey: data.grey,
          };
        })
      );
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { month, green, yellow, grey } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          green={green}
          yellow={yellow}
          grey={grey}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;
    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <section className="calendar">
        <header className="header">
          <div className="month-display row">{this.renderMonthLabel()}</div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </section>
    );
  }
}
