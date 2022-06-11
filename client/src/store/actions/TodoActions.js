import * as types from './TodoActionTypes';
import TodoService from '../../service/TodoService';

const todoService = new TodoService();

export const fetchTodos = () => async (dispatch) => {
    try {
        const { data } = await todoService.getTodos();
        dispatch({
            type: types.FETCH_TODOS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await todoService.createTodo(todo);
        dispatch({
            type: types.CREATE_TODO,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
