import React, {useCallback, useContext} from 'react'
import TodoStore from '../stores/TodoStore'
import {observer} from 'mobx-react-lite'
import {Row} from 'antd/lib/grid'
import {Col, List, Space, Checkbox, Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons';

const TodoList = () => {
    const {title, todos, toggleTodo, removeTodo} = useContext(TodoStore);
    const handleCheckBox = useCallback((e) => toggleTodo(e.target.id), [toggleTodo]);
    const handleDelete = useCallback((e) => removeTodo(e.currentTarget.id), [removeTodo]);

    return (
        <Row justify='start'>
            <Col span={12} offset={6}>
                <List>
                    {todos.filter(todo => {
                        if (!title) {
                            return true;
                        }
                        return todo.title.toLowerCase().includes(title.toLowerCase());
                    }).map(todo => (
                        <List.Item key={todo.id}>
                            <List.Item.Meta
                                title={todo.title}
                            />
                            <Space>
                                <Checkbox
                                    id={todo.id}
                                    checked={todo.completed}
                                    onChange={handleCheckBox}/>
                                <Button type='primary'
                                        shape='circle'
                                        icon={<DeleteOutlined/>}
                                        id={todo.id}
                                        onClick={handleDelete}/>
                            </Space>
                        </List.Item>
                    ))}
                </List>
            </Col>
        </Row>
    )
}

export default observer(TodoList)
