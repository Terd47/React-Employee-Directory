import React from "react";

function Row(props) {
  return <div className="row" data-masonry='{"percentPosition": true }' >{props.children}</div>;
}

export default Row;