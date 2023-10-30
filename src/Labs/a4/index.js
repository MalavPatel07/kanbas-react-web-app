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
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { Provider } from "react-redux";
import store from "../store";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import ToDos from "./ReduxExamples/todos";
import { useSelector } from "react-redux";

   

function Assignment4 () {
    function sayHello() {
    alert("Hello World!");
    };

    

     
       
 return(
    <Provider store={store}>     
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
     <ArrayStateVariable />
     <ParentStateComponent />
     <ReduxExamples />
     <HelloRedux />
     <CounterRedux />
     <AddRedux />
     <ToDos/>

   </Provider>
 );
};
export default Assignment4;