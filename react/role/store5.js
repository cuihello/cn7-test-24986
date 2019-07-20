import {observable,action,computed,toJS} from "mobx";
class Store5 {
    @observable data=[]
    @action setData(nda){
        this.data=nda;
    }
    @computed get getData(){
        return toJS( this.data);
    }
}

const store5=new Store5();
export default store5