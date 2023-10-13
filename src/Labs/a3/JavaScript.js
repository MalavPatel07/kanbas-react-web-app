import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariablesTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";

function JavaScript() {
    console.log("Hello World!");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/> 
          <VariableTypes/> 
          <BooleanVariables/>
          <IfElse/>
            <TernaryOperator/>
            <ES5Functions/>
       </div>
    );
 }
 export default JavaScript;