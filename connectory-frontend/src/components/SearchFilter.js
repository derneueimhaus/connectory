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

  toggleFilters = (boolean) => {
    this.setState({ showFilters: boolean });
  };

  render() {
    return (
      <div>
        <div className="homepage-selection">
          <div className="search">
            <form>
              <input
                type="text"
                placeholder="Know who you're looking for? Search for a name..."
                onChange={this.handleInputChange}
              />
              <button type="submit">
                Go
                <Search />
              </button>
            </form>
          </div>
          <button
            className="button filters-toggle"
            onClick={() => this.toggleFilters(!this.state.showFilters)}
          >
            <p>Filters</p>
            <Filter />
          </button>
        </div>
        {this.state.showFilters && (
          <Filters professions={this.props.professions} />
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
