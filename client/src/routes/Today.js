import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

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
`;

class Today extends React.Component {
  render() {
    return (
      <Container>
        <ul>
          {this.props.records.map((record) => (
            <Card key={record._id}>{record.name}</Card>
          ))}
          <button onClick={this.props.createRecord}>추가</button>
        </ul>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state,
  };
}

export default connect(mapStateToProps)(Today);
