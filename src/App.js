import React from "react";
import Calendar from "./components/Calendar";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = async () => {
    const res = await axios({
      method: "post",
      url: "http://localhost:3001/text",
      data: {
        name: "hahahha",
        content: "hohoho",
      },
    });

    console.log(res);
  };

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default App;
