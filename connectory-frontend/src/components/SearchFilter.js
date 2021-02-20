import React, { Component } from "react";

import { connect } from "react-redux";
import { addSearchTerm } from "../redux/actions/searchActions";

import Filters from "./Filters";
import { ReactComponent as Filter } from "../assets/filters.svg";
import { ReactComponent as Search } from "../assets/search.svg";

import "../styles/SearchFilter.css";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      showFilters: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    this.props.addSearchTerm(event.target.value);
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchTerm: this.state.searchTerm,
      }),
    });
  };

  toggleFilters = (boolean) => {
    this.setState({ showFilters: boolean });
  };

  render() {
    return (
      <div>
        <div className="homepage-selection">
          <form className="search">
            <input
              className="search-box"
              type="search"
              placeholder="Know who you're looking for? Search for a name..."
              onChange={this.handleInputChange}
              required
            />
            <button
              className="button search-submit"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              <Search className="search-filter-icon" />
              Go
            </button>
          </form>
          <button
            className="button filters-toggle"
            onClick={() => this.toggleFilters(!this.state.showFilters)}
          >
            <p>Filters</p>
            <Filter className="search-filter-icon" />
          </button>
        </div>
        {this.state.showFilters && (
          <Filters filterOptions={this.props.filterOptions} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapActionsToProps = (dispatch) => ({
  addSearchTerm: (text) => dispatch(addSearchTerm(text)),
});

export default connect(mapStateToProps, mapActionsToProps)(SearchFilter);
