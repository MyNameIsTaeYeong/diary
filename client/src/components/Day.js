import React from "react";
import styled, { keyframes } from "styled-components";

const ModalShow = keyframes`
  from {
    opacity: 0;
    margin-bottom: 50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const ModalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  animation: ${ModalBgShow} 0.3s;
  & > section {
    width: 300px;
    height: 400px;
    background-color: #fff;
    animation: ${ModalShow} 0.3s;
    & > header {
      padding: 16px;
      background-color: #f1f1f1;
      font-weight: 700;
    }
  }
`;

const CalendarRowDate = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Day({ openModal, closeModal, modalCheck, date }) {
  return (
    <div>
      {modalCheck ? (
        <Modal>
          <section>
            <header>
              <span>2020 5월 20일</span>
              <button onClick={closeModal}>x</button>
            </header>
            <main></main>
            <footer></footer>
          </section>
        </Modal>
      ) : (
        <CalendarRowDate id={date} onClick={openModal}>
          {date === 0 ? " " : date}
        </CalendarRowDate>
      )}
    </div>
  );
}

export default Day;
