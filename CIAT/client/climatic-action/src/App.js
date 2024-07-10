import Todo from "./components/toDo/toDo";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Acción climatica</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            ¿Que hay por hacer?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Añadir
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Mostrar </span>
          <span>todos</span>
          <span className="visually-hidden"> tareas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span>Activo</span>
          <span className="visually-hidden"> tareas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span>Completado</span>
          <span className="visually-hidden"> tareas</span>
        </button>
      </div>
      <h2 id="list-heading">3 tareas restantes</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}

export default App;
