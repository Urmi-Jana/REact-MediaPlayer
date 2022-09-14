import React, { useState } from "react";

function Form() {

  const [register, setRegister] = useState(false)
  const [mouse, setMouse] = useState(false)

  function mouseChange(){
    setMouse(true)
}

function colorChange(){
    setMouse(false)
}

  function login(event){
    setRegister(true)
    event.preventDefault()
  }
  return (<div className = "hello">
  <h1>Hello</h1>
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!register && (<input type="password" placeholder="Confirm Password" />)}

      <button 
        type="submit"
        onClick = {login} 
        onMouseOver = {mouseChange}
        onMouseOut = {colorChange} 
        style = {{background: mouse? "black" : null}} 
       >
      {register ? "Login" : "Register"}</button>
    </form>
    </div>
  );
}

export default Form;
