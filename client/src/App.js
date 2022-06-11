import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TodoPage from './pages/todo/TodoPage';
import NavBar from './components/NavBar';
import { fetchTodos } from './store/actions/TodoActions';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="w-screen h-screen">
            <div>
                <NavBar />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
