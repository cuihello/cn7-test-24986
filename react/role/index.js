import {axios} from '@choerodon/boot'
export default function getMessage() {
    axios.get('/notify/v1/notices/sitemsgs?page=1&read=false&size=10&sort=id%2Cdesc&type=msg&user_id=1').
    then(data=>{
        alert('可以请求')
        console.log(data)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}