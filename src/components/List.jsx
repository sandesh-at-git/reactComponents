import React from "react";
const li = {
  color: "red",
  backgroundColor: "skyblue",
  margin: "1em",
  fontSize: "19px",
  fontWeight: "bolder",
  textAlign: "center"
};

function List() {
  return (
    <div>
      <ul>
        <li style={li}>Marvel's Eternals</li>
        <li style={li}>Man of Steel</li>
        <li style={li}>Avengers</li>
      </ul>
    </div>
  );
}

export default List;
