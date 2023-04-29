import { useState } from "react";
import { updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo, date, id }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTodo(id, text))
    }

    return (
        <div >
            <li
                className="task"
                style={{
                    color: todo ? '#bdc3c7' : '#34495e',
                    display: "inlineGrid",
                    justifyContent: "space-between"
                }}
                data-testid="todo-test"
            >
                <span style={{ display: editing ? 'none' : '' }}>{todo}</span>
                <form
                    style={{ display: editing ? 'inline' : 'none' }}
                    onSubmit={onFormSubmit}
                >
                    <input
                        type="text"
                        value={text}
                        className="edit-todo"
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
                <div>
                    <span style={{ display: editing ? 'none' : '' }}>{date}</span>
                    <span className="icon" onClick={() => dispatch(deleteTodo(id))}>
                        <i className="fas fa-trash" />
                    </span>
                </div>

                {/* <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span> */}
            </li>
        </div>
    )
}

export default Todo;