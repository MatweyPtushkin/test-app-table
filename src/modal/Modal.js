import React from "react";
import './Modal.css';

class Modal extends React.Component {
constructor() {
    super()

    this.state = {
        modal: "none",
    }
}

  render() {
    return (
      <div className="modal" style={{ display: this.state.modal }}>
        <div className="modal__inner">
          <button className="close-btn" onClick={this.toggleModal}>
            X
          </button>
          <form>
            <div className="modal__inner-id">
              <p>id:</p>
              <input type="number" id="id" onChange={this.hangleId}></input>
            </div>
            <div className="modal__inner-firstName">
              <p>firstName:</p>
              <input type="text" onChange={this.hangleFirstName}></input>
            </div>
            <div className="modal__inner-lastName">
              <p>lastName:</p>
              <input type="text" onChange={this.hangleLastName}></input>
            </div>
            <div className="modal__inner-email">
              <p>email:</p>
              <input type="email" onChange={this.hangleEmail}></input>
            </div>
            <div className="modal__inner-phone">
              <p>phone:</p>
              <input type="tel" onChange={this.hanglePhone}></input>
            </div>
            <button className="add" onClick={this.addData}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;