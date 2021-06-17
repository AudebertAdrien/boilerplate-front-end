import React from "react";

function list() {
  const links = ["Fruits", "Vegetables", "Fresh product", "Drink"];
  return (
    <div className="mt-4">
      <ul>
        {links.map((link) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>
    </div>
  );
}

export default list;
