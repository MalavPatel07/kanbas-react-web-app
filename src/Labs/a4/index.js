import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStatevariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";

const Assignment4 = () => {
    function sayHello() {
    alert("Hello World!");
    };        
 return(
    <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions theFunction={sayHello} />
     <EventObject />
     <Counter />
     <BooleanStateVariables />
     <StringStateVariables />
     <DateStateVariable />
     <ObjectStateVariables />
   </>
 );
};
export default Assignment4;