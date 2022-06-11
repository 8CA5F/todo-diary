import axios from 'axios';

const URL = 'http://localhost:5000/api/todos';

export default class TodoService {
    async getTodos() {
        return await axios.get(URL);
    }

    async createTodo(todo) {
        return await axios.post(URL, todo);
    }
}
