import x from "../data.js";
import { firstname, lastname } from "../data.js";
console.log(firstname.name);
console.log(lastname.name);
console.log(x.name);

import { createRoot } from "react-dom/client";

const h1 = <h1>Hello World</h1>;
const root = createRoot(document.querySelector("#root"));

// Create new card

// const card = (
//   <div className="card">
//     <img
//       src="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=645&dpr=2&s=none&crop=none"
//       alt=""
//     />
//     <div className="card-content">
//       <h3>Iphone X</h3>
//       <p>Apple</p>
//       <p>
//         <b>$10000</b>
//       </p>
//     </div>
//   </div>
// );

// Rendering Multiple Cards but all have same content
// const container = [card, card, card, card, card, card, card];
// root.render(<div class="card-container">{container}</div>);
// to manupulate the content of each card

function Card(key, title, url, brand, price) {
  return (
    <div className="card" key={key}>
      <img src={url} alt="" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>{"$" + price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((e) =>
      Card(e.id, e.title, e.images[0], e.brand, e.price)
    );
    console.log(data);
    root.render(<div className="card-container">{container2}</div>);
  });

// here order need to be maintained
// React component is nothing but the react element having type function
