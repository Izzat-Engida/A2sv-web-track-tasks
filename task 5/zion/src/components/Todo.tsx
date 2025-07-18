import { useReducer, useState } from "react";

const initialState = { done: [], notdone: [] };

type ActionType =
  | { type: 'done'; payload: string }
  | { type: 'notdone'; payload: string }
  | { type: 'delete'; payload: string };

type StateType = { done: string[]; notdone: string[] };

function reducer(state: StateType, action: ActionType): StateType {
  if (action.type === 'done') {
    return {
      done: [...state.done, action.payload],
      notdone: state.notdone.filter(item => item !== action.payload),
    };
  } else if (action.type === 'notdone') {
    return {
      done: state.done.filter(item => item !== action.payload),
      notdone: [...state.notdone, action.payload],
    };
  } else if (action.type === 'delete') {
    return {
      done: state.done.filter(item => item !== action.payload),
      notdone: state.notdone.filter(item => item !== action.payload),
    };
  }
  return state; // default fallback (to satisfy TS)
}

export function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState<string>("");

  return (
    <>
      <h2>Todo App</h2>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type="text"
        placeholder="Write something"
      />
      <button
        onClick={() => {
          if (data.trim() !== "") {
            dispatch({ type: 'notdone', payload: data });
            setData("");
          }
        }}
      >
        Add
      </button>

      <br /><br />
      <div style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h3>✅ Done</h3>
          {state.done.map((item, key) => (
            <div key={key}>
              <span>{item}</span>
              <button onClick={() => dispatch({ type: 'notdone', payload: item })}>⏪</button>
              <button onClick={() => dispatch({ type: 'delete', payload: item })}>❌</button>
            </div>
          ))}
        </div>

        <div>
          <h3>🕓 Not Done</h3>
          {state.notdone.map((item, key) => (
            <div key={key}>
              <span>{item}</span>
              <button onClick={() => dispatch({ type: 'done', payload: item })}>✅</button>
              <button onClick={() => dispatch({ type: 'delete', payload: item })}>❌</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
