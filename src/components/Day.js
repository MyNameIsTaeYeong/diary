import "./Day.css";

function Day({ openModal, closeModal, modalCheck, date }) {
  return (
    <div>
      {modalCheck ? (
        <div className="modal">
          <section>
            <header>
              <span>2020 5월 20일</span>
              <button onClick={closeModal}>x</button>
            </header>
            <main></main>
            <footer></footer>
          </section>
        </div>
      ) : (
        <div id={date} onClick={openModal} className="calendar__row--date">
          {date === 0 ? " " : date}
        </div>
      )}
    </div>
  );
}

export default Day;
