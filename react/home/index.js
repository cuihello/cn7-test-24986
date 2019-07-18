import React, { Component } from 'react';
import getMessage from '../role/index'
export default class Home extends Component {
  componentDidMount() {
    getMessage()
  }

  render() {
    return(<div> 这是首页暂时没内容</div>)
    ;
  }
}