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
    this.googleLogin = this.googleLogin.bind(this);
    this.tempLogin = this.tempLogin.bind(this);
    this.tempJoin = this.tempJoin.bind(this);
  }

  componentDidMount() {
    //this.fetchTest();
  }

  googleLogin = async () => {
    const res = await axios.get("http://localhost:4002/auth/google");
    const user = res.data;
    console.log(user);
  };

  tempLogin = async () => {
    const res = await axios.get("http://localhost:4002/auth/temp");
    const user = res.data;
    console.log(user);
  };

  tempJoin = async () => {
    const res = await axios.get("http://localhost:4002/auth/join");
    const user = res.data;
    console.log(user);
    this.setState({
      isLoggedIn: true,
    });
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
          <LoginForm
            googleLogin={this.googleLogin}
            tempLogin={this.tempLogin}
            tempJoin={this.tempJoin}
          />
        </div>
      );
    }
  }
}

export default App;
