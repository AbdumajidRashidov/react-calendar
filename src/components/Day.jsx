import React from "react";
import Modal from "./Modal";
export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showModal: false,
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      day: { date, isCurrentMonth, isToday, number },
      color,
    } = this.props;

    return (
      <>
        <span
          key={date.toString()}
          className={
            "day" +
            (isToday ? " today" : "") +
            (isCurrentMonth ? "" : " different-month") +
            ` ${color}`
          }
          onClick={isCurrentMonth ? this.handleShowModal : null}
        >
          {number}
        </span>
        {this.state.showModal && (
          <Modal>
            <div className="modal">
              <div className="modalContent">
                <h2>{number}</h2>
                <h2>{color}</h2>
                <button className="closeBtn" onClick={this.handleHideModal}>
                  close
                </button>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
