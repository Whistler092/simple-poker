import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./IndexSession.scss";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function IndexSession() {
  return (
    <div className="dashboard">
      <h1>The casual scrum poker</h1>
      <div className="dashboard-content">
        <h2>Create Session</h2>
        <button type="submit" className="btn btn-primary">
          Create Session
        </button>

        <div className="dashboard-copy-url">
          <input
            type="text"
            className="form-control"
            placeholder="Session URL"
            disabled
          />
          <FontAwesomeIcon className="copy-icon" icon={faCopy} />
        </div>
      </div>
    </div>
  );
}
