import React from 'react'
import { Card } from 'antd'
import path from 'path'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class myCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('src/static/datas/data.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.listData}) })
            .catch((e) => { console.log(e.message) })
        console.log(path.join(__dirname))
    }

    componentDidMount() {
        this.fetchFn()
    }

    render() {
        return (
            <Card title="资源导航" style={{ width: "800px", margin: "0 auto" }} className="animated zoomIn">
                {
                    this.state.lists.map((e, index) => {
                        return (
                            <p key={index} className="doclist"><a href={ e.url } target="_blank">{ e.title }</a></p>
                        )
                    })
                }
            </Card>
        )
    }
}

