const h1 = React.createElement(
  "h1",
  { id: "h1", xyz: "srinu" },
  "react element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);

const heading = document.createElement("h1");
heading.innerText = "hello";
console.log(heading);

console.log(h1);
