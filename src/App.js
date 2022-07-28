import React, { Component } from 'react'
import Hello from './component/Hello'
import AxiosTst from './component/AxiosTst'

export default class App extends Component {

  add=(data)=>{
    console.log(data,"sdsd");
  }
  render() {
    return (
      <div>
         {/* 引入组件 */}
         <Hello  a={"我是入口组件"}  add={this.add}/>
         <AxiosTst />
      </div>
    )
  }
}

