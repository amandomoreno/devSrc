import React, { Component } from 'react';
import AddNote from '../../components/AddNote/AddNote'
import * as resourceAPI from '../../services/resourceApi'
import * as noteAPI from '../../services/noteApi'
import './ShowResource.css'

class ShowResource extends Component {
  state = {
    resource: this.props.location.state.resource,
    notes: [...this.props.location.state.resource.notes],
  }

  async componentDidMount() {
    const resource = await resourceAPI.getResource(this.props.location.state.resource._id);
    this.setState({notes: [...resource.notes]})
  }

  handleAddNote = async (newNoteData) => {
    const resource = await noteAPI.addNote(newNoteData);
    this.setState(state => ({
      notes: [...state.notes, resource.notes[resource.notes.length - 1]]
    }));
  };

  render() {
    const resource = this.props.location.state.resource;
    return (
      <div className="showResource">
        <div className="row resourceLeft">
          <a href={resource.url}>
            <h2 className="resource-title">{resource.title}</h2>
          </a>
          <div className="row">
            <p>Description: <br/>{resource.description}</p>
          </div>
          <div className="row">
            <p>Tags: <br />{resource.tag}</p>
            <button
              className="btn grey lighten-1"
            >
              <a href={resource.url}>Visit Site</a>
            </button>
            <button
              className="btn"
              onClick={() => this.props.handleAddToSavedItems(resource)}
            >
              Save
            </button>
          </div>
      </div>
      <div className="row resourceRight">
        <div className="overflow-auto">
          {this.state.notes.map((note) => (
            <div>
              {note.userName}: {note.content}
            </div>
          ))}
        </div>
        <AddNote
          resource={resource}
          handleAddNote={this.handleAddNote}
        />
      </div>
    </div>
    )
  }
}

export default ShowResource;


