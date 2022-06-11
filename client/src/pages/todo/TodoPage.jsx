import React from 'react';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoFilter from '../../components/TodoFilter';

const TodoPage = () => {
    return (
        <div className="h-[calc(100%-4rem)] flex items-center">
            <div className="w-1/3">
                <TodoFilter />
            </div>
            <div className="w-1/3">
                <TodoList />
            </div>
            <div className="w-1/3">
                <TodoForm />
            </div>
        </div>
    );
};

export default TodoPage;
