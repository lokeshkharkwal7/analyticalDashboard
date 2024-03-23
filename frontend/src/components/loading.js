import React from "react";

function Loading() {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loading;
