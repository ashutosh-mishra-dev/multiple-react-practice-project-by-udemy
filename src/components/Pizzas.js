import React from "react";
import "../css/pizzas.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizzas() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const pizzaNum = pizzas.length;
  //console.log(pizzaNum);

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaNum > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. all
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we are still working on our menu. Pls come back Later.</p>
      )}
      {/* rendering */}
      {/* <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul> */}

      {/* 
      // listing manually
      <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price="10"
        />
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          photoName="pizzas/focaccia.jpg"
          price="6"
        />

        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          photoName="pizzas/margherita.jpg"
          price="10"
        />

        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName="pizzas/funghi.jpg"
          price="10"
        />

        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          photoName="pizzas/salamino.jpg"
          price="15"
        />

        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas/prosciutto.jpg"
          price="18"
        /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold Out ".toUpperCase() : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} />
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 to {closeHour}
          :00.
        </p>
      )}
      {/* yha {} javascript ko likhane ke liye kiya */}

      {/* {new Date().toLocaleTimeString("es-Es", { hour12: false })} we are
      currenely open ! */}
    </footer>
    //React.createElement("footer", null, "we are currently open!....")
  );
}

function Order({ closeHours }) {
  return (
    <div className="order">
      <p>we are open until {closeHours}:00 come visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  );
}

export default Pizzas;
