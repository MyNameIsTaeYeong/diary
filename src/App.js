import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calendar from "./routes/Calendar";
import axios from "axios";
import Today from "./routes/Today";

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
        <BrowserRouter>
          <Navigation></Navigation>
          <Route path="/calendar" component={Calendar}></Route>
          <Route path="/today" component={Today}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
