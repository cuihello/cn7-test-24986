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
        this.data.imageurl=nda.imageurl;
        this.data.realname=nda.realname;
        this.data.usename=nda.usename;
        this.data.email=nda.email;
        this.data.mobilephone=nda.mobilephone;
        this.data.language=nda.language;
        this.data.organizationname=nda.organizationname;
        this.data.organizationid=nda.organizationid;
    }
    @computed get getData(){
        return this.data;
    }
}

const store=new Store();
export default store