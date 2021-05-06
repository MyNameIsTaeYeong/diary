import React from "react";
import Calendar from "./components/Calendar";

class App extends React.Component {
  // state = { 날짜에 관련된 정보 }

  constructor(props) {
    super(props);

    this.state = {
      year: 2020,
    };
    this.next = this.next.bind(this);
  }

  next() {
    this.setState((state) => ({
      year: state.year + 1,
    }));
  }
  render() {
    // <Calendar year={} month={} date={}/>
    return (
      <div>
        <Calendar year={2021} month={4} />
      </div>
    );
  }
}

export default App;
