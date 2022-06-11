import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { createTodo } from '../store/actions/TodoActions';

const todoSchema = Yup.object({
    title: Yup.string().max(30, 'Title has a maximum limit of 30 characters.'),
    detail: Yup.string()
        .required()
        .max(240, 'Detail has a maximum limit of 240 characters.'),
});

const TodoForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(todoSchema) });

    const onSubmit = (todo) => {
        dispatch(createTodo(todo));
        reset();
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h2 className="text-xl text-center mb-10 font-semibold">
                    Create a To-Do
                </h2>
                {/* title input */}
                <div>
                    <input
                        type="text"
                        {...register('title')}
                        className="w-72 h-10 rounded drop-shadow-lg border outline-none px-4 capitalize placeholder:italic placeholder:text-base placeholder:font-thin placeholder:normal-case"
                        placeholder="Title"
                    />
                    <div className="h-8">{errors.title?.message}</div>
                </div>
                {/* detail input */}
                <div>
                    <textarea
                        type="text"
                        {...register('detail')}
                        className="w-72 h-44 rounded drop-shadow-lg border outline-none p-4 capitalize resize-none placeholder:italic placeholder:text-base placeholder:font-thin placeholder:normal-case"
                        placeholder="Detail (optional)"
                    />
                    <div className="h-8 text-red-500">
                        {errors.detail?.message}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-72 h-12 text-gray-700 font-medium border-gray-300 rounded-md bg-gray-200 border drop-shadow-lg hover:bg-zinc-400 hover:border-zinc-500 transition-all"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
