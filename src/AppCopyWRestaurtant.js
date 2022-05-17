import React from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props){
  console.log(props)
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}
function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjustive} food around.</p>
      <img src={restaurant}/>
      <ul style={{ textAlign:"left" }}>
        {props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}
function Footer(props){
  return(
    <footer>
      <p>Copright {props.year}</p>
    </footer>
  )
}

const dishes = ["Mac and Cheese", 
"Salmon", 
"Veggies",
"Tomatoes"];

//keys (used with arrays) helps to keep your data organized 
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
console.log(dishObjects)


function App() {
  return (
    <div className="App">
      <Header name = "Bob"/>
      <Main adjustive = "amazing" dishes = {dishObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
