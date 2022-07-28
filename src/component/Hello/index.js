import React, { Component } from 'react'
// npm i prop-types  对传递的props属性做限制
import PropTypes from 'prop-types'

export default class index extends Component {
    // 规定传值的类型
    static propTypes ={
        a:PropTypes.string.isRequired
    }
    addSon(){
        console.log(this.props.a);
        this.props.add(10)
    }
    
  render() {
    // 在render里面会执行两次
    // console.log("sdsds");
    return (
      <div onClick={()=>this.addSon()}>点击index.....{this.props.a}</div>
    )
  }
}
