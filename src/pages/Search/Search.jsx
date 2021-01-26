import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

class SearchResources extends Component {
  state = {
    invalidForm: false,
    formData: {
      queryString: "",
    },
    results: [],
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h2>Search Resources</h2>
        <div id="searching" className="row">
          <form className="col" ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field">
                <input
                  className="active"
                  name="queryString"
                  value={this.state.formData.queryString}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="search-results">
          {this.props.searchResults.map((resource) => (
            <div class="card">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  <a href={resource.url}>{resource.title}</a>
                </span>
                <p>Description: {resource.description}</p>
                <Link
                  to={{
                    pathname: "/details",
                    state: {resource}
                  }}
                >
                  Details
                </Link>
              </div>

            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SearchResources;


