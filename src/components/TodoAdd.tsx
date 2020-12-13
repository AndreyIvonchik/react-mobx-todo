import React, {useCallback, useContext, useState} from 'react';
import TodoStore from '../stores/TodoStore';
import {observer} from 'mobx-react-lite';
import {Alert, Button, Input, Row, Space} from 'antd';
import 'antd/dist/antd.css';

const AddTodo = () => {
    const {title, addTitle, addTodo, showAlert, textAlert, hideAlert} = useContext(TodoStore);

    const handleAdd = useCallback(() => {
        if (!title.trim()) {
            showAlert('Title is empty!');

            return false;
        }
        addTodo({
            title: title,
            completed: false
        });
        addTitle('');
    }, [title, addTodo, showAlert, addTitle]);

    const handleChange = useCallback((e) => addTitle(e.target.value), [addTitle]);

    return (
        <>
            <Row justify='center'>
                <Space>
                    <Input placeholder='Add title...'
                           allowClear
                           onChange={handleChange}
                           type='text'
                           value={title}
                    />
                    <Button type='primary'
                            onClick={handleAdd}>
                        Add Todo
                    </Button>
                </Space>
            </Row>
            <Row justify='center'>
                {textAlert && <Alert message={textAlert}
                                     type='warning'
                                     showIcon
                                     closable
                                     afterClose={hideAlert}/>}
            </Row>
        </>);
}

export default observer(AddTodo);
