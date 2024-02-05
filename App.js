const heading = React.createElement("div",
 { id : 'parent div' },
 [React.createElement("div",{id : "child1 div"}, 
 [React.createElement("h1", {id: "h1 heading"}, "This is h1 tag"),React.createElement("h2", {id: "h2 heading"}, "This is h2 tag")]),
 React.createElement("div",{id : "child2 div"}, 
 [React.createElement("h1", {id: "h1 heading"}, "This is h1 tag"),React.createElement("h2", {id: "h2 heading"}, "This is h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);