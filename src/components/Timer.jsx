import React from "react";

function Timer(props) {
  const { title, description, time, primaryColor, secondaryColor } = props;
  return (
    <div className="text">
      <h1 className="title" style={{ color: primaryColor }}>
        {title}
      </h1>
      <h3 className="description" style={{ color: secondaryColor }}>
        {description}
      </h3>
      <p className="time" style={{ color: primaryColor }}>
        <b>{time}</b>
      </p>
    </div>
  );
}

export default Timer;
