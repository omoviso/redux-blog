import React, { Component } from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
  let notificationList = null;
  if (notifications && notifications.length > 0) {
    notificationList = notifications.map(notification => {
      return (
        <div className="card-body p-2 border my-2" key={notification.id}>
          <p>
            <b>{notification.user}</b> {notification.content}
            <span className="text-muted">
              <br />
              {moment(notification.time.toDate()).calendar()}
            </span>
          </p>
        </div>
      );
    });
  } else {
    notificationList = (
      <h1 className="h1 text-center text-white"> No News At The Moment!</h1>
    );
  }
  return <div className="notifications">{notificationList}</div>;
};

export default Notifications;
