import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const previousTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }

    const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
      <>
          <h1>Todos - RTK Query</h1>
          <hr />
          <h4>Is Loading: { isLoading ? 'True' : 'False' }</h4>
          <pre>{ JSON.stringify(todo) }</pre>
          <button onClick={previousTodo}>
              Previous Todo
          </button>
          <button onClick={nextTodo}>
              Next Todo
          </button>
          {/* <ul>
              {todos.map(todo => (
                  <li key={todo.id}>
                      <strong>{ todo.completed ? 'DONE ' : 'Pending ' }</strong>
                      {todo.title}</li>
              ))}
          </ul> */}
      </>
  )
}
