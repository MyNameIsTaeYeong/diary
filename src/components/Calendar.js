import React from "react";
import Day from "./Day";
import "./Calendar.css";

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
    if ((this.firstDay + this.lastDay) % 7 !== 0) {
      this.loopCnt = ((this.firstDay + this.lastDay) / 7 + 1) * 7;
    } else {
      this.loopCnt = this.firstDay + this.lastDay;
    }

    for (let index = 1; index <= this.loopCnt; index++) {
      if (index <= this.firstDay || index > this.firstDay + this.lastDay) {
        this.row.push({ id: index, date: 0 });
      } else {
        this.row.push({ id: index, date: index - this.firstDay });
      }

      if (index % 7 === 0) {
        this.rows.push(this.row);
        this.row = [];
      }
    }

    return (
      <div>
        <div className="calendar">
          <div className="calendar__row">
            <div className="calendar__row--title">
              {this.props.year + "년 " + (this.props.month + 1) + "월"}
            </div>
          </div>
          <div className="calendar__row">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          {this.rows.map((row, index) => (
            <div key={index} id={index} className="calendar__row">
              {row.map((day) => (
                <Day key={day.id} date={day.date}></Day>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
