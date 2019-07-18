import {observable,action,computed} from "mobx";
class Store {
    @observable data={
        usename:"管理员",
        email:"admin@example.org",
        mobilephone:"18314568098",
        language:"简体中文",
        organizationname:"",
        organizationid: ""
    }
    @action setData(nda){
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