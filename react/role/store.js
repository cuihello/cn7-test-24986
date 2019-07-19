import {observable,action,computed} from "mobx";
class Store {
    @observable data={
        imageurl:"",
        usename:"admin",
        realname:"admin",
        email:"example@mail",
        mobilephone:"13888888888",
        language:"简体中文",
        organizationname:"",
        organizationid: ""
    }
    @action setData(nda){
        this.data=nda;
    }
    @computed get getData(){
        return this.data;
    }
}

const store=new Store();
export default store