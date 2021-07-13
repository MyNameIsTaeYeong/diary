import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { addRecord, updateRecord } from "../store";

axios.defaults.withCredentials = true;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
  margin-top: 30%;
  overflow-y: auto;
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 0;

    & > button {
      font-size: large;
      border: none;
      background: none;
    }
  }
`;

const Card = styled.div`
  width: 230px;
  height: 90px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    & button {
      border: none;
      background: none;
      font-size: 15px;
    }
  }
`;

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.createRecord = this.createRecord.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
  }

  createRecord = async () => {
    const recordName = prompt("hello");
    try {
      const res = await axios.post("http://localhost:4002/user/addRecord", {
        userId: this.props.user._id,
        recordName,
      });
      const record = res.data.record;
      if (res.status === 200) {
        this.props.addRecord(record);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateRecord = async (e) => {
    const recordId = e.target.parentElement.parentElement.id;
    const recordIndex =
      e.target.parentElement.parentElement.getAttribute("name");

    const recordValue = e.target.value;
    try {
      const res = await axios.post("http://localhost:4002/user/updateRecord", {
        userId: this.props.user._id,
        currentDate: this.props.user.currentDate,
        recordId,
        recordIndex,
        recordValue,
      });
      const user = res.data;
      // store 업데이트
      if (res.status === 200) {
        this.props.updateRecord(user.records);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props.user);
    return (
      <Container>
        <ul>
          {this.props.user.records.map((record, index) => {
            if (record.dateAndValue[this.props.user.currentDate] === 1) {
              return (
                <Card key={record._id} id={record._id} name={index}>
                  <div>{record.name}</div>
                  <div>
                    <button onClick={this.updateRecord} value="1" color="red">
                      상상
                    </button>
                    <button onClick={this.updateRecord} value="0">
                      중
                    </button>
                    <button onClick={this.updateRecord} value="-1">
                      하
                    </button>
                  </div>
                </Card>
              );
            } else if (record.dateAndValue[this.props.user.currentDate] === 0) {
              return (
                <Card key={record._id} id={record._id} name={index}>
                  <div>{record.name}</div>
                  <div>
                    <button onClick={this.updateRecord} value="1">
                      상
                    </button>
                    <button onClick={this.updateRecord} value="0">
                      중중
                    </button>
                    <button onClick={this.updateRecord} value="-1">
                      하
                    </button>
                  </div>
                </Card>
              );
            } else if (
              record.dateAndValue[this.props.user.currentDate] === -1
            ) {
              return (
                <Card key={record._id} id={record._id} name={index}>
                  <div>{record.name}</div>
                  <div>
                    <button onClick={this.updateRecord} value="1">
                      상
                    </button>
                    <button onClick={this.updateRecord} value="0">
                      중
                    </button>
                    <button onClick={this.updateRecord} value="-1">
                      하하
                    </button>
                  </div>
                </Card>
              );
            } else {
              return (
                <Card key={record._id} id={record._id} name={index}>
                  <div>{record.name}</div>
                  <div>
                    <button onClick={this.updateRecord} value="1">
                      상
                    </button>
                    <button onClick={this.updateRecord} value="0">
                      중
                    </button>
                    <button onClick={this.updateRecord} value="-1">
                      하
                    </button>
                  </div>
                </Card>
              );
            }
          })}
          <button onClick={this.createRecord}>추가</button>
        </ul>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRecord: (record) => dispatch(addRecord(record)),
    updateRecord: (records) => dispatch(updateRecord(records)),
  };
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);
