import React from "react";
import { Link } from "react-router-dom";
import "./ResourceCard.css";

const ResourceCard = ({ resource, handleDeleteResource }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <a href={resource.url}>{resource.title}</a>
          </span>
          <p> Description: {resource.description}</p>
        </div>
        <div className="resourceCardBtns">
          <div className="btn-div">
            <button className="btn grey lighten-1">
              <Link
                to={{
                  pathname: "/details",
                  state: { resource },
                }}
              >
                Details
              </Link>
            </button>
          </div>
          <div className="btn-div"> 
            <button
              className="btn red lighten-2"
              type="submit"
              onClick={() => handleDeleteResource(resource._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
