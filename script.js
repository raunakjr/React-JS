import x from "./data.js";
import { firstname, lastname } from "./data.js";
console.log(firstname.name);
console.log(lastname.name);
console.log(x.name);
import ReactDOM from "react-dom";
const h1 = <h1>Hello World</h1>;
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1);
