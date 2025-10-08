import React from "react";
import { Greetings } from "../components/Greetings";

export const Homepage = () => {
    return(
    <>
        <h1>Main Page</h1>
        <Greetings name="Raphael" numberOfOfMsgs={10} />
    </>
)}