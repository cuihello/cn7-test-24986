import React from 'react'
import App from '../component/left-nav'
import {Tables} from "../component/table-show";
import {Create} from "../component/create-role";
import store3 from '../role/store3'
import {observer} from 'mobx-react'
@observer
export default class Roleshow extends React.Component{
    render() {
        return(
            <div style={{display:"flex"}}>
            <div><App/></div>
            <div>
                <div id="create">{store3.getState===true?<Tables />:<Create/>}</div>
            </div>
        </div>)
    }
}