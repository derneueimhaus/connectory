import React, { Component } from "react";

import { connect } from "react-redux";
import { addSearchTerm } from "../redux/actions/searchActions";

import "../styles/SearchFilter.css";
import Filters from "./Filters";

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
              <button type="submit">Go</button>
            </form>
          </div>
          <button onClick={() => this.toggleFilters(!this.state.showFilters)}>
            Filters
          </button>
        </div>
        {this.state.showFilters && <Filters />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapActionsToProps = {
  addSearchTerm,
};

export default connect(mapStateToProps, mapActionsToProps)(SearchFilter);
