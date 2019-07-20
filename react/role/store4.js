import {observable,action,computed,toJS} from "mobx";
class Store4 {
    @observable data=[]
    @action setData(nda){
        this.data=nda;
    }
    @computed get getData(){
        return toJS(this.data);
    }
}

const store4=new Store4();
export default store4