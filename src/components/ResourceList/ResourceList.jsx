import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import './ResourceList.css'

const ResourceList = (props) => {
  return (
    <>
    <h2 className="MySavedItems">My Saved Items</h2>
      <div className="saved-resources">
        {props.myResources.map((resource) => (
          <ResourceCard
            handleDeleteResource={props.handleDeleteResource}
            // handleAddNote={props.handleAddNote}
            resource={resource}
            user={props.user}
          />
        ))}
      </div>
    </>
  );
};

export default ResourceList;
