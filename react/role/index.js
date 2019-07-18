import {axios} from '@choerodon/boot'
export  function getSeting() {
    axios.get('/iam/v1/menus?code=choerodon.code.top.user&source_id=0').
    then(data=>{
        alert('可以请求')
        console.log(data)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}

export function getLimitMessage() {
    axios.get('/iam/v1/users/1/roles?page=1&params=&size=10\n').
    then(data=>{
        alert('可以请求')
        console.log(data)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}

export function getPeopleMessage() {
    axios.get('/iam/v1/users/1/roles?page=1&params=&size=10\n').
    then(data=>{
        alert('可以请求')
        console.log(data)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}