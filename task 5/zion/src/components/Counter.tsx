import { useReducer } from "react"
const initialState={count:0}
type CounterState={count:number}
type ActionState={type:string,payload:number}
function reducer(state:CounterState,action:ActionState){
    if(action.type=='inc'){
        return {count:state.count+action.payload}
    }
    else if(action.type=='dec'){
    return {count:state.count-action.payload}
    }
    return state
}
export function Counter(){
    const [state,dispatch]=useReducer(reducer,initialState)
    return(<>
    count:{state.count}
    <button onClick={()=>dispatch({type:'inc',payload:1})}>add</button><br/>
    <button onClick={()=>dispatch({type:'dec',payload:1})}>sub</button>
    </>)
}