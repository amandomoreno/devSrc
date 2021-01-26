import React, {Component} from 'react';
import "./AddNote.css"

class AddNote extends Component {
  state = {
      invalidForm: true,
      formData: {
        content: "",
        resourceId: this.props.resource._id
      }
    };
  
    formRef = React.createRef();
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleAddNote(this.state.formData);
      this.setState({formData: {content: "", resourceId: this.props.resource._id}})
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
          <div className="comment box">
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="noteForm">
            <input name="content" type="text" placeholder="Add A Note" value={this.state.formData.content} onChange={this.handleChange}></input>
          </div>
          <input name='id' hidden defaultValue={this.state.formData.resourceId}></input>
              <button
                className="btn grey lighten-1"
              >Add Note</button>
          </form>
          </div>
          </>
      );
  }
}
  
export default AddNote;