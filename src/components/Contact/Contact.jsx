import React from "react";

const Contact = ({item, onRemove}) => {
  return <div>
    <p>{item.name}</p>
    <p>{item.number}</p>
    <button type="button" onClick={() => {onRemove(item.id)}}>Delete</button>
  </div>;
};

export default Contact;
