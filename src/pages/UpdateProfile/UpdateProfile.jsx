import React, { Component } from "react";
import './UpdateProfile.css'

class UpdateProfile extends Component {
  state = {
    users: [],
    invalidForm: true,
    formData: {
      github: this.props.user.github ? this.props.user.github : "",
      linkedIn: this.props.user.linkedIn ? this.props.user.linkedIn : "",
      website: this.props.user.website ? this.props.user.website : "",
      profileId: this.props.user._id
    },
  };

  formRef = React.createRef();

  handleSubmit = e => {
      e.preventDefault();
      this.props.handleUpdateUser(this.state.formData);
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
        <h2>Update Profile</h2>
        {this.props.profileId ?
        // Update Form 
        <div id="UserProfile" className="row">
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="github"
                  id="github"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="github">
                GitHub Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="linkedIn"
                  id="linkedIn"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="linkedIn">
                LinkedIn Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="website"
                  id="website"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="website">
                Website (url):
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Update
            </button>
          </form>
          </div>
        : // Add Info Form
        <div id="UserProfile" className="row">
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="github"
                  id="github"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="github">
                GitHub Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="linkedIn"
                  id="linkedIn"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="linkedIn">
                LinkedIn Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="website"
                  id="website"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="website">
                Website (url):
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Update
            </button>
          </form>
          </div>
        }  
      </>
    );
  }
}

export default UpdateProfile;