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
    if (!this.state.searchTerm || !isNaN(this.state.searchTerm)) {
      alert("Are you sure that's a name? 🤔");
    }
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

  toggleFilters = (e, boolean) => {
    e.preventDefault();
    this.setState({ showFilters: boolean });
  };

  render() {
    return (
      <>
        <div className="homepage-selection">
          <form className="search">
            <input
              className="search-box"
              type="search"
              placeholder="Know who you're looking for? Search for a name..."
              onChange={this.handleInputChange}
            />
            <button
              className="button search-submit search-buttons"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              <Search className="search-filter-icon" />
              Go
            </button>
            <button
              className={
                this.state.showFilters
                  ? "button filters-toggle filters-toggle-show search-buttons"
                  : "button filters-toggle search-buttons"
              }
              onClick={(e) => this.toggleFilters(e, !this.state.showFilters)}
            >
              Filters
              <Filter className="search-filter-icon" />
            </button>
          </form>
        </div>
        {this.state.showFilters && (
          <Filters filterOptions={this.props.filterOptions} />
        )}
      </>
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
