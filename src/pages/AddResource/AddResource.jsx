import React, {Component} from 'react'
import ResourceList from "../../components/ResourceList/ResourceList";
import "./AddResource.css";

let blankFormData = {
    title: "",
    description: "",
    url: "",
    tag: "",
};

class AddResource extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: "",
      description: "",
      url: "",
      tag: "",
    }
  };

  formRef = React.createRef();


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddResource(this.state.formData);
    this.setState((state) => ({
      formData: blankFormData
    }))
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
        <div id="addResource" className="row">
          <h3>Submit Resource</h3>
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="title"
                  id="resource_title"
                  type="text"
                  className="active"
                  value={this.state.formData.title}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="resource_title">
                  Title:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="description"
                  id="description"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="description">
                  Description:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="url"
                  id="resource_url"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="rescource_url">
                  Link
                </label>
              </div>
            </div>
            <div className="tags">
              <label className="card-text">Tags:</label>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Javascript"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Javascript</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="HTML"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">HTML</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="CSS"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">CSS</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Node.js"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Node.js</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="React"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">React</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="MongoDB"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">MongoDB</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Python"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Python</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Django"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Django</span>
                </label>
              </p>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Submit Resource
            </button>
          </form>
        </div>
		<ResourceList 
			savedItems={this.props.savedItems}
			handleDeleteResource= {this.props.handleDeleteResource}
			user= {this.props.user} />
      </>
    );
  }
}

export default AddResource;
