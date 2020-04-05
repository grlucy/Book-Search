import React from "react";
import "./Notification.css";

function Notification(props) {
  return (
    <>
      <div className="notification" onClick={props.onClick}>
        <button className="delete"></button>
        {props.children}
      </div>
    </>
  );
}

export default Notification;
