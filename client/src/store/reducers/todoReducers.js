import * as types from '../actions/TodoActionTypes';

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        case types.CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo._id !== action.payload
                ),
            };
        case types.UPDATE_TODO_IS_COMPELETED:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return todo;
                    }
                }),
            };
        case types.SEARCH_TODO:
            return {
                ...state,
                todos: action.payload,
            };
        case types.DELETE_COMPLETED_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default todoReducer;
