import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    // melakukan pengaturan jarak dan background dan juga mebuat teks jadi di tengah, pada h1 ubah teks jadi warna putih
    <div className="my-1 py-1 bg-secondary text-center">
      <div className="mx-auto pt-2 pb-5 w-50">
      <h1 className="text-white">Simple TodoApp</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        {/* atur jarak margin antara input dan button*/}
        <button className="ms-1" type="Submit">Add Todo</button>
      </form>
      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
      </div>
    </div>
  );
}

export default Todos;