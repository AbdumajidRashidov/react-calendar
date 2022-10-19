import React from "react";
import Day from "./Day";

export default class Week extends React.Component {
  render() {
    let days = [];
    let { grey, green, yellow, date, month } = this.props;

    function getColor() {
      green = green?.map((e) => {
        return +e;
      });

      yellow = yellow?.map((e) => {
        return +e;
      });
      grey = grey?.map((e) => {
        return +e;
      });

      if (green?.includes(date.date())) {
        return "green";
      } else if (grey?.includes(date.date())) {
        return "grey";
      } else if (yellow?.includes(date.date())) {
        return "yellow";
      } else {
        return "No events! Have a rest :)";
      }
    }

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date,
      };

      days.push(<Day key={day.number} day={day} color={getColor()} />);

      date = date.clone();
      date.add(1, "day");
    }

    return <div className="row week">{days}</div>;
  }
}
