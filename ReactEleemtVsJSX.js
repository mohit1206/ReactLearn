import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("div",
//  { id : 'parent div' },
//  [React.createElement("div",{id : "child1 div"}, 
//  [React.createElement("h1", {id: "h1 heading"}, "This is h1 tag"),React.createElement("h2", {id: "h2 heading"}, "This is h2 tag")]),
//  React.createElement("div",{id : "child2 div"}, 
//  [React.createElement("h1", {id: "h1 heading"}, "This is h1 tag"),React.createElement("h2", {id: "h2 heading"}, "This is h2 tag")])]);
//console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//React code to create element
// React.createElement => ReactElement (Object) => HTMLElemet(while render)
const heading = React.createElement("h1",{id:"heading"},"This is heading h1");
console.log(heading);

//JSX code to create element
//As JS engine doesn't understand JSX code as its not javascript so JSX code being transpiled before it reaches to JS engine and this is done by babel.
// Here parcel is internally using babel to do this. Babel job is converting JSX code to React.createElement. 
//JSX => React.createElement => ReactElement (Object) => HTMLElemet(while render)

const jsxheading = <h1 id="heading1">This is heading 1</h1>;
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);



