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

  render() {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th onClick={this.props.onSort.bind(null, "id")}>
                id{" "}
                {this.props.sortField === "id" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </th>
              <th onClick={this.props.onSort.bind(null, "firstName")}>
                firstName{" "}
                {this.props.sortField === "firstName" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </th>
              <th onClick={this.props.onSort.bind(null, "lastName")}>
                lastName{" "}
                {this.props.sortField === "lastName" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </th>
              <th onClick={this.props.onSort.bind(null, "email")}>
                email{" "}
                {this.props.sortField === "email" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </th>
              <th onClick={this.props.onSort.bind(null, "phone")}>
                phone{" "}
                {this.props.sortField === "phone" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((elem, index) => (
              <tr
                key={elem[index] + elem.phone}
                onClick={this.props.onRowSelect.bind(null, elem)}
              >
                <td key={elem.id}>{elem.id}</td>
                <td key={elem.firstName}>{elem.firstName}</td>
                <td key={elem.lastName}>{elem.lastName}</td>
                <td key={elem.email}>{elem.email}</td>
                <td key={elem.phone}>{elem.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal />
      </div>
    );
  }
}

export default Table;
