import * as React from "react"

import TodoList from "./components/TodoList"
import AddTodo from "./components/TodoAdd";
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import './App.css';
import TodoInfo from "./components/TodoInfo";

export default function App() {
    return (
    <Layout>
        <Header><h1 className='Title'>Todo List</h1></Header>
        <Content>
            <AddTodo/>
            <TodoInfo/>
            <TodoList/>
        </Content>
    </Layout>
    )
}
