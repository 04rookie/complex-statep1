import React, { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState({ fName: "", lName: "" });
  function updateText(event) {
    //console.log(event.target);
    event.target.name === "fName"
      ? setGreeting({ fName: event.target.value, lName: greeting.lName })
      : setGreeting({ fName: greeting.fName, lName: event.target.value });
  }
  return (
    <div className="container">
      <h1>
        Hello {greeting.fName} {greeting.lName}
      </h1>
      <form>
        <input
          onChange={updateText}
          name="fName"
          placeholder="First Name"
          value={greeting.fName}
        />
        <input
          onChange={updateText}
          name="lName"
          placeholder="Last Name"
          value={greeting.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
