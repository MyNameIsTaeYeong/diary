import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calendar from "./routes/Calendar";
import Today from "./routes/Today";
import LoginForm from "./components/LoginForm";
import axios from "axios";
import { connect } from "react-redux";
import { addCurrentDate, addEmail, addId, addRecord } from "./store";

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

    this.props.addCurrentDate(today);

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
    const res = await axios.get("http://localhost:4002/auth/templogin");
    const user = res.data;
    const records = user.records;
    if (res.status === 200) {
      this.setState({
        isLoggedIn: true,
      });
      this.props.addId(user._id);
      this.props.addEmail(user.email);
      records.forEach((record) => this.props.addRecord(record));
    }

    console.log(this.state.today);
  };

  tempJoin = async () => {
    const res = await axios.get("http://localhost:4002/auth/join");
    const user = res.data;
    console.log(user);
    if (res.status === 200) {
      this.setState({
        isLoggedIn: true,
      });
      this.props.addId(user._id);
      this.props.addEmail(user.email);
      user.records.forEach((record) => this.props.addRecord(record));
    }
  };

  render() {
    console.log("App");
    if (this.state.isLoggedIn) {
      return (
        <div>
          <BrowserRouter>
            <Navigation />
            <Route path="/today" component={Today} />
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
    addId: (id) => dispatch(addId(id)),
    addEmail: (email) => dispatch(addEmail(email)),
    addCurrentDate: (today) => dispatch(addCurrentDate(today)),
    addRecord: (record) => dispatch(addRecord(record)),
  };
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
