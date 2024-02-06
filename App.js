import React from "react";
import ReactDOM from "react-dom/client";

const para = <h2>This is a paragraph.</h2>;

const Title = () => <h1 className="title">This is title component</h1>;

const Heading = () =>{
   return <>
        <Title />
        <Title></Title>
        {Title()}
        {para}
        {100+200}
        <h1 className="title">This is heading component</h1>
        <h2>This is second heading</h2>
    </>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)
