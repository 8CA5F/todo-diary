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

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const { data } = await todoService.deleteTodo(id);
        dispatch({
            type: types.DELETE_TODO,
            payload: data.deletedTodoId,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateTodoIsCompeleted = (id) => async (dispatch) => {
    try {
        const { data } = await todoService.updateTodoIsCompeleted(id);
        dispatch({
            type: types.UPDATE_TODO_IS_COMPELETED,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const searchTodo = (query) => async (dispatch) => {
    try {
        const { data } = await todoService.getTodosByQuery(query);
        dispatch({
            type: types.SEARCH_TODO,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteCompletedTodos = () => async (dispatch) => {
    try {
        const { data } = await todoService.deleteCompletedTodos();
        dispatch({
            type: types.DELETE_COMPLETED_TODOS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
