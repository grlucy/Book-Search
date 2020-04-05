import React from "react";
import "./Notification.css";

function Notification(props) {
  return (
    <>
      <div class="notification" onClick={props.onClick}>
        <button class="delete"></button>
        {props.children}
      </div>
    </>
  );
}

export default Notification;
