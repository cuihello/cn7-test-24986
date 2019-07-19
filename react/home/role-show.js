import React from 'react'
import App from '../component/left-nav'
import {Tables} from "../component/table-show";

export default class Roleshow extends React.Component{
    render() {
        return(
            <div style={{display:"flex"}}>
            <div><App/></div>
            <div>
                <div><Tables /></div>
            </div>
        </div>)
    }
}