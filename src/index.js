import React from "react";
import ReactDOM from "react-dom";

const f_name = "Mazda";
const l_name = "Shahzadi";

ReactDOM.render(
  <div>
    <h1>
      Hello {f_name} {l_name}
    </h1>
    <br />
    <p>My lucky number is {3 + 4}.</p>
  </div>,
  document.getElementById("root")
);
