import React from "react";

const Alert = (props) => {
  const text = props.text;
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{text}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
