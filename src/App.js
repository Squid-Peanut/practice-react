import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // setTodos에서 ...배열 은 이전에 가지고 있던 배열을 전부 가져오는 것을 뜻한다.
    setTodos(currentAarray => [toDo, ...currentAarray]);
    setTodo("");
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do...." />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;



