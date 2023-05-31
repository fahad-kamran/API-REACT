import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoItems } from '../../Config/Store/Reducer/getTodos';

function DisplayTodos() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todos);
    console.log(data)
    useEffect(() => {
        dispatch(fetchTodoItems());
    }, [dispatch]);
    return (
        <section className="py-5">
            <div className="container-lg">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                <>
                                    {
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.userId}</td>
                                                <td>{item.title}</td>
                                                <td>{item.completed !== false ? 'True' : 'False'}</td>
                                            </tr>
                                        ))
                                    }
                                </>
                            ) : (
                                <tr>
                                    <td colSpan={4}>Data is Empty</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DisplayTodos;