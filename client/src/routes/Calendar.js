import React from "react";
import Day from "../components/Day";
import styled from "styled-components";

const SCalendar = styled.div`
  width: 100%;
  height: 80vh;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30%;
`;

const SCalendarRow = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  & > div:first-child {
    color: red;
  }

  & > div:last-child {
    color: blue;
  }
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.leapYearMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.notLeapYearMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      modalCheck: Array.from({ length: 32 }, () => false),
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  next() {
    if (this.state.month === 11) {
      this.setState((state) => ({
        month: 0,
        year: state.year + 1,
      }));
    } else {
      this.setState((state) => ({
        month: state.month + 1,
      }));
    }
  }

  prev() {
    if (this.state.month === 0) {
      this.setState((state) => ({
        month: 11,
        year: state.year - 1,
      }));
    } else {
      this.setState((state) => ({
        month: state.month - 1,
      }));
    }
  }

  openModal(e) {
    this.setState({
      modalCheck: Array.from({ length: 32 }, (v, index) => {
        if (index === parseInt(e.target.id)) {
          return true;
        } else {
          return false;
        }
      }),
    });
  }

  closeModal() {
    this.setState({
      modalCheck: Array.from({ length: 32 }, () => false),
    });
  }

  render() {
    if (this.state.year % 4 === 0) {
      this.lastDay = this.leapYearMonth[this.state.month];
    } else {
      this.lastDay = this.notLeapYearMonth[this.state.month];
    }
    this.firstDay = new Date(this.state.year, this.state.month, 1).getDay();

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
        <SCalendar>
          <SCalendarRow>
            <div>
              <button onClick={this.prev}>prev</button>
            </div>
            <div className="calendar__row--title">
              {this.state.year + "년 " + (this.state.month + 1) + "월"}
            </div>
            <div>
              <button onClick={this.next}>next</button>
            </div>
          </SCalendarRow>
          <SCalendarRow>
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </SCalendarRow>
          {this.rows.map((row, index) => (
            <SCalendarRow key={index} id={index}>
              {row.map((day) => (
                <Day
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                  modalCheck={this.state.modalCheck[day.date]}
                  key={day.id}
                  date={day.date}
                  today={this.props.today}
                />
              ))}
            </SCalendarRow>
          ))}
        </SCalendar>
      </div>
    );
  }
}

export default Calendar;
