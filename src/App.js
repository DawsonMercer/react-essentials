import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from "./pages";
// function SecretComponent(){
//   return <h1>Secret info for authed users</h1>
// }

// function RegularComponent(){
//   return <h1>Everyone can see this</h1>
// }

function App() {
  // if (props.authorized){
  //   return <SecretComponent/>;
  // }else{
  //   return <RegularComponent/>;
  // }
  //use if statement or the turnary operator

  // useState is used to set the state of a variable
  // useState("happy") is used ot set the state when first loaded
  //below is array destructuring - emotion is the variable and setEmotion changes the variable

  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecondary] = useState("tired");
  // // console.log(emotion);

  // useEffect(() => {
  //   console.log(`its ${emotion} around here`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`its ${secondary} around here 2nd`);
  // }, [secondary]);

  // const [checked, toggle] = useReducer(
  //   (checked) =>!checked,
  //   false
  //   );
  //call this a reducer function - takes in the current state and returns the opposite
  // function toggle(){
  //   setChecked(checked =>!checked)

  // }
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // useEffect(() =>{
  //   if(!login) return;
  //   setLoading(true)
  //   fetch(`https://api.github.com/users/${login}`)
  //   .then((response) => response.json())
  //   .then(setData)
  //   .then(()=> setLoading(false))
  //   .catch(setError);
  // }, [login]);

  // if(loading) return<h1>Loading...</h1>;
  // if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if(!data) return null;

  // if (data){
  //   return (
  //   <div>
  //     <h1>{data.login}</h1>
  //     <p>{data.location}</p>
  //     <img src={data.avatar_url}/>
  //     </div>
  //   );
  // }
  return(
    <div>
    {/* <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={()=> setEmotion("happy")}>Make Happy</button>
    <button onClick={()=> setSecondary("crabby")}>Make Crabby</button>
    <button onClick={()=> setEmotion("frustrated")}>Frustrate</button>
    <button onClick={()=> setEmotion("enthusiatic")}>Enthuse</button> */}
    
    {/* <input type="checkbox" value={checked} onChange={toggle}/>
    <p>{checked ? "checked" : "NOT checked"}</p> */}
    

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}>
          {/* //nested routes */}
          <Route path='services' element={<Services />}/>
          <Route path='history' element={<CompanyHistory />}/>
          <Route path='location' element={<Location />}/>

        </Route>
        <Route path='/events' element={<Events />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Whoops404 />}/>
      </Routes>
    </div>

  )
}

export default App;
