import React from "react";
import Day from "./Day";

class Calendar extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.leapYearMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.notLeapYearMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  componentDidMount() {}

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    if (this.props.year % 4 === 0) {
      this.lastDay = this.leapYearMonth[this.props.month];
    } else {
      this.lastDay = this.notLeapYearMonth[this.props.month];
    }
    this.firstDay = new Date(this.props.year, this.props.month, 1).getDay();

    this.rows = [];
    this.row = [];
    for (let index = 1; index <= this.firstDay + this.lastDay; index++) {
      if (index <= this.firstDay) {
        this.row.push({ id: index, date: 0 });
      } else {
        this.row.push({ id: index, date: index - this.firstDay });
      }

      if (index % 7 === 0) {
        this.rows.push(this.row);
        this.row = [];
      }
    }
    if (this.row.length !== 7) {
      this.rows.push(this.row);
    }

    return (
      <div>
        {this.rows.map((row, index) => (
          <div key={index} id={index}>
            {row.map((day) => (
              <Day key={day.id} date={day.date}></Day>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;
