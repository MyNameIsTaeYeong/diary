import "./Day.css";

function Day({ openModal, closeModal, modalCheck, date }) {
  return (
    <div>
      {modalCheck ? (
        <section className="modal">
          <button onClick={closeModal}>x</button>
        </section>
      ) : (
        <div id={date} onClick={openModal} className="calendar__row--date">
          {date === 0 ? " " : date}
        </div>
      )}
    </div>
  );
}

export default Day;
