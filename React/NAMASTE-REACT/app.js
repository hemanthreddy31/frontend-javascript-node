const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"hello World From React!");

console.log(heading); // heading is an object
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method convert heading object in to tag and put inside dom