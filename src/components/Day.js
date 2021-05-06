import "./Day.css";

function Day({ date }) {
  return <div className="calendar__row--date">{date === 0 ? " " : date}</div>;
}

export default Day;
