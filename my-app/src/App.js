import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>counter app</h2>
      <div className="mt-10">
        <button
        onClick={e=>dispatch({type:'INCREMENT'})}
        className="p-3 bg-indigo-600 text-white mb-2">increment</button>
        <Counter/>
        <button
        onClick={e=>dispatch({type:'DECREMENT'})}
        className="p-3 mt-3 bg-red-600 text-white">deccrement</button>
      </div>
    </div>
  );
}

export default App;
