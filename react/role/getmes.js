import {axios} from '@choerodon/boot'
import store1 from './store'

export function Getmes() {
    const des={
        code: '',
        level: '',
        params: [],
        name: '',
        enabled: 'true',
        buildIn: 'true'
    }
    axios.post( `/iam/v1/roles/search?page=1&size=10&sort=id,desc`,des).
    then(data=>{
        console.log(data)
        store1.setData(data)
        console.log(store1.getData,store1.getData.list)
    }).catch(error=>{
        alert('请求错误')
        console.log(error)
    })
}
