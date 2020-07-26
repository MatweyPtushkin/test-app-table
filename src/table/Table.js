import React from "react";
import "./Table.css";
import Modal from "../modal/Modal";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addId: "",
      addFirstName: "",
      addLastName: "",
      addEmail: "",
      addPhone: "",
    };
  }

  toggleModal = () => {
    if (this.state.modal == "block") {
      this.setState({ modal: "none" });
    } else {
      this.setState({ modal: "block" });
    }
  };

  handleId = (e) => {
    this.setState({ addId: e.target.value });
  };

  handleFirstName = (e) => {
    this.setState({ addFirstName: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ addLastName: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ addEmail: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ addPhone: e.target.value });
  };

  addData = (e) => {
    e.preventDefault();
    let addData = {
      id: this.state.addId,
      firstName: this.state.addFirstName,
      lastName: this.state.addLastName,
      email: this.state.addEmail,
      phone: this.state.addPhone,
    };
    console.log(this.state.addId);
    this.state.data.push(addData);
    this.setState({ modal: "none" });
  };

  render() {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>id &#9660;</th>
              <th>firstName &#9660;</th>
              <th>lastName &#9660;</th>
              <th>email &#9660;</th>
              <th>phone &#9660;</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((elem, index) => (
              <tr key={elem[index] + elem.phone}>
                <td key={elem.id}>{elem.id}</td>
                <td key={elem.firstName}>{elem.firstName}</td>
                <td key={elem.lastName}>{elem.lastName}</td>
                <td key={elem.email}>{elem.email}</td>
                <td key={elem.phone}>{elem.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="nextButton">Next</button>
        <Modal />
      </div>
    );
  }
}

export default Table;
