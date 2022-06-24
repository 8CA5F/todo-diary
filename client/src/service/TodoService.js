import axios from 'axios';

const URL = 'http://localhost:5000/api/todos';

export default class TodoService {
    async getTodos() {
        return await axios.get(URL);
    }

    async createTodo(todo) {
        return await axios.post(URL, todo);
    }

    async deleteTodo(id) {
        return await axios.delete(`${URL}/${id}`);
    }

    async updateTodoIsCompeleted(id) {
        return await axios.patch(`${URL}/${id}`);
    }

    async getTodosByQuery(query) {
        return await axios.get(`${URL}/query/${query}`);
    }

    async deleteCompletedTodos() {
        return await axios.get(`${URL}/deleteCompletedTodos`)
    }
}
