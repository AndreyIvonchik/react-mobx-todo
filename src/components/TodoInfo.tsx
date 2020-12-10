import React, {useContext} from "react"
import TodoStore from "../stores/TodoStore"
import {observer} from "mobx-react-lite"
import {Row, Space, Statistic} from "antd";
import 'antd/dist/antd.css';

const TodoInfo = () => {
    const {info} = useContext(TodoStore);

    return (
        <Row justify="center">
            <Space size='large'>
                <Statistic title="Total items" value={info.total}/>
                <Statistic title="Finished items" value={info.completed}/>
                <Statistic title="Unfinished items" value={info.notCompleted}/>
            </Space>
        </Row>
    )
}

export default observer(TodoInfo)
