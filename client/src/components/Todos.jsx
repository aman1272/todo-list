import { useEffect } from 'react';
import {getAllTodos } from '../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
// component
import Todo from './Todo';
export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [todos])

    const getTodos = () => {
        return todos;
    }

    return (
        <article>
            <ul>
                {
                    getTodos().map(data => (
                        <Todo
                            key={data.id}
                            id={data.id}
                            todo={data.todotext}
                            date={data.date}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;