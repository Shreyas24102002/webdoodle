import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        fontFamily: "cursive",
        color: "black", // Changed color to black
        fontSize: "24px",
        fontWeight: "bold",
        height: "50px", // Adjusted height to make it smaller
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "blue",
          marginRight: "4px", // Added margin to separate "Web" from "Doodle"
        }}
      >
        Web
      </span>
      <span>Doodle</span>
    </div>
  );
};

export default Navbar;
