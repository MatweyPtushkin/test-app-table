import React from "react";
import "./App.css";
import Table from "../table/Table";
import Loader from "../loader/Loader";
import _ from "lodash";
import RowView from "../rowView/RowView";
import Modal from "../modal/Modal";
import ModeSelector from "../modeSelector/ModeSelector";
import ReactPaginate from "react-paginate";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isModeSelected: false,
      isLoading: false,
      data: [],
      smallList: true,
      sort: "asc", // desc
      sortField: "id", // default
      row: null,
      modal: "block",
    };
  }

  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);

    this.setState({ data, sort, sortField });
  };

  onRowSelect = (row) => this.setState({ row });

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    });
  }

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true,
    });
    this.fetchData(url);
  };

  render() {
    const pageSize = 50;
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeSelectHandler} />
        </div>
      );
    }
    return (
      <div className="App">
        <button className="addData" onClick={this.toggleModal}>
          Add data in table
        </button>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table
            data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort}
            sortField={this.state.sortField}
            onRowSelect={this.onRowSelect}
          />
        )}
        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}
        {this.state.row ? <RowView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
