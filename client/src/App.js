import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calendar from "./routes/Calendar";
import Today from "./routes/Today";
import LoginForm from "./components/LoginForm";
import axios from "axios";
import { connect } from "react-redux";
import { add } from "./store";

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
    this.createRecord = this.createRecord.bind(this);
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

  createRecord = async () => {
    const recordName = prompt("hello");
    const res = await axios.post("http://localhost:4002/user/addRecord", {
      userId: this.state.user._id,
      recordName,
    });
    const user = res.data.user;
    const record = res.data.record;
    if (res.status === 200) {
      this.setState({
        user,
      });
      this.props.addRecord(record);
    }
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
                  user={this.state.user}
                  today={this.state.today}
                  records={this.state.user.records}
                  createRecord={this.createRecord}
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
