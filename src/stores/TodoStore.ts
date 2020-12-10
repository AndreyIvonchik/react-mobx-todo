import { observable, action, computed } from 'mobx'
import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface Todo {
    id?: string
    title: string
    completed: boolean
}

class TodoStore {

    @observable todos: Todo[] = [
        { id: uuidv4(), title: 'task 1', completed: false },
        { id: uuidv4(), title: 'Test task', completed: false },
        { id: uuidv4(), title: 'task 3', completed: true },
        { id: uuidv4(), title: 'task 4', completed: false },
        { id: uuidv4(), title: 'task 5', completed: false },
        { id: uuidv4(), title: 'task 6', completed: false },
        { id: uuidv4(), title: 'task 7', completed: true }
    ]

    @observable textAlert: string = '';

    @observable title: string = '';

    @action addTitle = (text: string) => {
        this.title = text;
    }

    @action showAlert = (text: string) => {
        this.textAlert = text;

        setTimeout(() => {
            this.hideAlert();
        }, 3000);
    }

    @action hideAlert = () => {
        this.textAlert = '';
    }

    @action addTodo = (todo: Todo) => {
        this.todos.push({ ...todo, id: uuidv4() });
    }

    @action toggleTodo = (id: string) => {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        })
    }

    @action removeTodo = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    @computed get info() {
        return {
            total: this.todos.length,
            completed: this.todos.filter(todo => todo.completed).length,
            notCompleted: this.todos.filter(todo => !todo.completed).length
        }
    }
}

export default createContext(new TodoStore());
