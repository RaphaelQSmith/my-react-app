import React from "react";
import { Greetings } from "../components/Greetings";

export const Homepage = () => {
    <>
        <h1>Main Page</h1>
        <Greetings name="Christian" numberOfOfMsgs={10} />
    </>
}