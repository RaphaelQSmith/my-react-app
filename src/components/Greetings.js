import React from "react";

export function Greetings(){
  let isEvening = (new Date()).getHours()>18;
  return isEvening 
  ? <h3>Good Evening!</h3>
  : <h3>Good Day!</h3>
  
}

