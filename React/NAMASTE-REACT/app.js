/**
 * 
 * <div id = "parent">
 *      <div id="child">
 *          <h1>I am h1 tag child</h1>
 *      <div>
 * </div>
 * 
 * 
 * 
 */



const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I'm an h1 tag")
    )
)


const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"hello World From React!");

console.log(heading); // heading is an object
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method convert heading object in to tag and put inside dom
root.render(parent);