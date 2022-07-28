import React, { Component } from 'react'
import Hello from './component/Hello'
export default class App extends Component {
  render() {
    return (
      <div>
         {/* 引入组件 */}
         <Hello />
      </div>
    )
  }
}

