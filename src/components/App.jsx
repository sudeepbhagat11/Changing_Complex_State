import React from "react";

function App() {
  const [heading, setHeading] = React.useState({
    fName: "",
    lName: ""
  });

  function changeHeading(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;

    setHeading((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {heading.fName} {heading.lName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={changeHeading} />
        <input name="lName" placeholder="Last Name" onChange={changeHeading} />
        <button onClick="">Submit</button>
      </form>
    </div>
  );
}

export default App;
