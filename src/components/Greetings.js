import React from "react";

export function Greetings(props){
  console.log(props)
  let isEvening = (new Date()).getHours()>18;
  let greetingsHeader = isEvening
  ? <h3>Good Evening, {props.name}</h3>
  : <h3>Good Morning, {props.name}</h3>
  return (
    <>
      {greetingsHeader}
      <p>You have {props.numOfMsgs} new messages!</p>
    </>
  )
  
}

