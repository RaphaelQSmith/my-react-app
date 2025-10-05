
  import React from "react";
  import { CounterButton } from './CounterButton';
  import { Greetings } from './components/Greetings'
  
  export const CounterButtonPage = () =>{
  const [numberOfClicks, setNumberOfClicks]= useState(0);
  const increment = () =>setNumberOfClicks(numberOfClicks + 1);
  
  return (
    <>
    <h1>The Counter Button Page</h1>
      <Greetings 
        numberOfClicks={numberOfClicks}
        threshould={10}
        onHide={() => setHideMessage(true)} />
      <CounterButton
      onIncrement={increment} 
      numberOfClicks={numberOfClicks} />
    </>
  );
}