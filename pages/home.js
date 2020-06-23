import store from "../utils/local-storage";
import webClient from "../utils/web-client";

export default () => {
  const todo = React.useRef(null);
  const [user, setUser] = React.useState(null);
  store.getStrapiUser(setUser);

  const [todos, setTodos] = React.useState([]);
  const todoList = todos.length ? (
    <ul>
      {todos.map((v, i) => (
        <li key={i}>
          <pre>{JSON.stringify(v, null, 2)}</pre>
        </li>
      ))}
    </ul>
  ) : (
    <p>Empty</p>
  );

  React.useEffect(() => {
    webClient("http://localhost:1337/todos", {}, setTodos, "get");
  }, []);

  const addTodoHandler = React.useCallback(
    (e) => {
      debugger;
      webClient(
        "http://localhost:1337/todos",
        { todoText: todo.current.value, user: { id: user.user.id } },
        (_) => {
          webClient("http://localhost:1337/todos", {}, setTodos, "get");
        }
      );
    },
    [user]
  );
  return (
    <>
      <h1>
        Welcome {user && user.user.username}[{user && user.user.email}]
      </h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div>
        Tod : <input type="text" ref={todo} />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      <div>
        <p>Todos:</p>
        {todoList}
      </div>
    </>
  );
};
