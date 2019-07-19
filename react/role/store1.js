import {observable,action,computed} from "mobx";
class Store1 {
    @observable data={

    }
    @action setData(nda){
        this.data=nda;
    }
    @computed get getData(){
        return this.data;
    }
}

const store1=new Store1();
export default store1