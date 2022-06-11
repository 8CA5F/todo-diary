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
        default:
            return {
                ...state,
            };
    }
};

export default todoReducer;
