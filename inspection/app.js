/* <div id="main">
    <div id="sub-2">
    <h1>hello srinu</h1>
    </div>
    <div id="sub-2">
    <h2>srinu</h2>
    </div>
</div> */

const h1 = React.createElement("div", { id: "main" }, [
  React.createElement(
    "div",
    { id: "sub-1",key:"t" },
    React.createElement("h1", {}, "hello srinu")
  ),
  React.createElement(
    "div",
    { id: "sub-2" ,key:"y"},
    React.createElement("h1", {}, "srinu")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);

console.log(h1)