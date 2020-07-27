import React from "react";
import "./App.css";
import Table from "../table/Table";
import Loader from "../loader/Loader";
import _ from "lodash";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: [],
      smallList: true,
      sort: "asc",
      sortField: "id",
    };
  }

  componentDidMount() {
    fetch(
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ 
          data: data, 
          isLoading: false,
          data: _.orderBy(data, this.state.sortField, this.state.sort) 
        });
      });
  }

  toggleList = () => {
    if (this.state.smallList === true) {
      this.setState({ isLoading: true });
      fetch(
        "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({ data: data, smallList: false, isLoading: false });
        });
    }
    if (this.state.smallList === false) {
      this.setState({ isLoading: true });
      fetch(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({ data: data, smallList: true, isLoading: false });
        });
    }
  };

  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";  
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  render() {
    return (
      <div className="App">
        <button className="addData" onClick={this.toggleModal}>
          Add data in table
        </button>
        <button className="toggleList" onClick={this.toggleList}>
          Toggle list (big or small)
        </button>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table data={this.state.data} onSort={this.onSort} sort={this.state.sort} sortField={this.state.sortField}/>
        )}
      </div>
    );
  }
}

export default App;
