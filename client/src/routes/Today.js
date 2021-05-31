import React from "react";
import styled from "styled-components";

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
          <Card>기분</Card>
          <Card>수면</Card>
          <Card>슬픔</Card>
        </ul>
      </Container>
    );
  }
}

export default Today;
