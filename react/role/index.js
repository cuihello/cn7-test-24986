import {axios} from '@choerodon/boot'
import store from './store'

 export function getPeopleMessage() {
    axios.get('/iam/v1/users/self').
    then(data=>{
        const nda={}
        nda.usename=data.loginName
        nda.email=data.email
        nda.imageurl=data.imageUrl
        nda.organizationname=data.organizationName
        nda.realname=data.realName
        nda.mobilephone=data.phone
        nda.organizationid=data.organizationId
        nda.language=data.language
        store.setData(nda)
        console.log(store.getData)
        console.log(store.getData.email)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}
