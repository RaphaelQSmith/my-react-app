import React from "react";

export function Greetings({name, numOfMsgs}){
  let isEvening = (new Date()).getHours()>18;
  let greetingsHeader = isEvening
  ? <h3>Good Evening, {name}</h3>
  : <h3>Good Morning, {name}</h3>
  return (
    <>
      {greetingsHeader}
      {numOfMsgs=== 0
        ? null
        :<p>You have {numOfMsgs} new messages!</p>}
    </>
  )
  
}

