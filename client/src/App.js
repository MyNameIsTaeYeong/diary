import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calendar from "./routes/Calendar";
import Today from "./routes/Today";
import LoginForm from "./components/LoginForm";
import axios from "axios";
import dotenv from "dotenv";
import { connect } from "react-redux";
import { add } from "./store";

dotenv.config();

class App extends React.Component {
  constructor(props) {
    super(props);

    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month =
      dateObj.getMonth() < 9
        ? "0" + (dateObj.getMonth() + 1)
        : dateObj.getMonth() + 1;
    const date =
      dateObj.getDate() < 9 ? "0" + dateObj.getDate() : dateObj.getDate();

    const today = year + month + date;

    this.state = {
      isLoggedIn: false,
      today,
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
    const res = await axios.get("http://localhost:4002/auth/templogin");
    const user = res.data;
    const records = user.records;
    this.setState({
      user,
      isLoggedIn: true,
    });
    console.log(this.state.today);
    console.log(this.state.user);

    records.forEach((record) => this.props.addRecord(record));
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
            <Route
              path="/today"
              render={() => (
                <Today
                  today={this.state.today}
                  records={this.state.user.records}
                />
              )}
            />
            <Route path="/calendar" component={Calendar} />
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

function mapDispatchToProps(dispatch) {
  return {
    addRecord: (record) => dispatch(add(record)),
  };
}

export default connect(null, mapDispatchToProps)(App);
