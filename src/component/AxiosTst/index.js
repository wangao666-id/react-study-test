import React, { Component } from 'react'
import axios from "axios"

export default class Axios extends Component {
    getMsg = () => {
        return () => {
            // 发送get请求
            axios.get('').then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getMsg}>发发请求</button>
            </div>
        )
    }
}
