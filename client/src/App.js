import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calendar from "./routes/Calendar";
import Today from "./routes/Today";
import LoginForm from "./components/LoginForm";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    //this.googleLogin = this.googleLogin.bind(this);
    this.fetchTest = this.fetchTest.bind(this);
  }
  componentDidMount() {
    //this.fetchTest();
  }

  // googleLogin = async () => {
  //   await axios.get("auth/google").then((res) => console.log(res));
  // };

  fetchTest = async () => {
    const res = await axios({
      method: "post",
      url: "http://localhost:4002/text",
      data: {
        name: "hahahha",
        content: "hohoho",
      },
    });

    console.log(res);
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <BrowserRouter>
            <Navigation />
            <Route path="/calendar" component={Calendar} />
            <Route path="/today" component={Today} />
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div>
          <LoginForm googleLogin={this.fetchTest} />
        </div>
      );
    }
  }
}

export default App;
