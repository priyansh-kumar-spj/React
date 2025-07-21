import React from "react";
import ReactDOM from "react-dom/client"; // Importing React and ReactDOM libraries

//React.createElement => object => HTMLElement(rendered to the DOM)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Priyansh!🔥"
);
console.log(heading);
//JSX - HTML like syntax or xml like syntax
//JSX (transpiled before  it reaches the js engine) -PARCEL -Babel
//jsx => React.createElement => Object => HTMLElement(rendered to the DOM)

const jsxHeading = <h1 id="heading"> Namaste React using JSX 🔥</h1>;

console.log(jsxHeading);

//React Component
// Functional Component => Function that returns JSX
const HeadingCOmponent = () => {
  return <h1 id="heading">Namaste Priyansh!🔥</h1>;
};

//Component Composition|| Tow or more components can be composed together.
//React Element! Component = () => React Element
const Heading = () => (
  <h1 className="heading"> Namaste Priyansh from React Element</h1>
);

//React Functional Component
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    <h3>{100 + 500}</h3>
    <Heading />
    <h1 className="heading">
      Namaste Priyansh from React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
